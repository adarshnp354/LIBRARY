
const express = require('express');
const adminRouter = express.Router();
const Bookdata=require('../model/Bookdata');

function router(nav){

    adminRouter.get('/',(req,res)=>{
        res.render("addbooks",
        { 
            nav,
            title:'Add Book'
        })
    })

    adminRouter.post('/add',(req,res)=>{
        var items = {
                    title:req.body.title,
                    author:req.body.author,
                    type:req.body.type,
                    img:req.body.img
                }
                var book = Bookdata(items);
                book.save();
                res.redirect('/books')          
    })

    
    adminRouter.post('/delete/:id',(req,res)=>{
        const id = req.params.id
        Bookdata.findByIdAndDelete(id,(err,docs)=>{
            if(err){
                console.log(err)
            }else{
                console.log("deleted",docs)
            }
        })
        res.redirect('/books')
    })

    adminRouter.get('/edit/:id',(req,res)=>{
        const id = req.params.id
        Bookdata.findOne({_id:id})
            .then((book)=>{
                res.render("edit",{nav,book})
            })
    
            
    })

    adminRouter.post('/update/:id',(req,res)=>{
        const id = req.params.id
        var items = {
                    title:req.body.title,
                    author:req.body.author,
                    type:req.body.type,
                    img:req.body.img
                }
               Bookdata.findByIdAndUpdate(id,items,(err,doc)=>{
                    if(err){
                        console.log(err)
                    }else{
                        console.log("updated",doc)
                    }
               })
                res.redirect('/books')          
    })
  

return adminRouter}
module.exports=router




