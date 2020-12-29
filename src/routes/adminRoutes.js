
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




return adminRouter}
module.exports=router




