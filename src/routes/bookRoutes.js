const express=require('express');
const booksRouter=express.Router();
const Bookdata=require('../model/Bookdata');

function router(nav){
    // var books=[{
    //     title:'English',
    //     author:'Adarsh',
    //     type:'Story',
    //     img:'book.jfif'
    // },{
    //     title:'Hindi',
    //     author:'Adarsh',
    //     type:'Poem',
    //     img:'book1.jfif'
    // },{
    //     title:'English',
    //     author:'Adarsh',
    //     type:'Novel',
    //     img:'book2.jfif'
    // },{
    //     title:'English',
    //     author:'Adarsh',
    //     type:'Novel',
    //     img:'book3.jfif'
    // },{
    //     title:'English',
    //     author:'Adarsh',
    //     type:'Novel',
    //     img:'book4.jfif'
    // }]
booksRouter.get('/',(req,res)=>{
    Bookdata.find()
    .then((books)=>{
        res.render("books",{nav,title:"books",books})
    })
})
    

booksRouter.get('/:id',(req,res)=>{
    const id = req.params.id
    Bookdata.findOne({_id:id})
    .then((book)=>{
        res.render("book",{nav,title:"book",book})
    })
    
})





return booksRouter;
}
module.exports=router
