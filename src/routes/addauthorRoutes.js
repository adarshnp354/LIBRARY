
const express = require('express');
const Authordata=require('../model/Authordata');
const addauthorRouter = express.Router();


function router(nav){

    addauthorRouter.get('/',(req,res)=>{
        res.render("addauthor",{
            nav,
            title: 'Add Author'
        })
    })

    addauthorRouter.post('/add',(req,res)=>{
        var item = {
            name:req.body.name,
            age:req.body.age,
            place:req.body.place,
            img:req.body.img
        }
        var author = Authordata(item);
        author.save()
        res.redirect('/authors')
    })

    addauthorRouter.get('/edit/:id',(req,res)=>{
        const id = req.params.id
        Authordata.findOne({_id:id})
            .then((author)=>{
                res.render("editauthor",{nav,author})
            })

    })
        
    addauthorRouter.post('/delete/:id',(req,res)=>{
        const id = req.params.id
        Authordata.findByIdAndDelete(id,(err,doc)=>{
            if(err){
                console.log(err)
            }else{
                console.log("deleted",doc)
            }
        })
        res.redirect('/authors')
    })

return addauthorRouter}
module.exports=router

