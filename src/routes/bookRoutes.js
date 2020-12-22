const express=require('express');
const booksRouter=express.Router();
function router(nav){
    var books=[{
        title:'English',
        author:'Adarsh',
        type:'Story',
        img:'book.jfif'
    },{
        title:'Hindi',
        author:'Adarsh',
        type:'Poem',
        img:'book1.jfif'
    },{
        title:'English',
        author:'Adarsh',
        type:'Novel',
        img:'book2.jfif'
    },{
        title:'English',
        author:'Adarsh',
        type:'Novel',
        img:'book3.jfif'
    },{
        title:'English',
        author:'Adarsh',
        type:'Novel',
        img:'book4.jfif'
    }]
booksRouter.get('/',(req,res)=>{
    res.render("books",{nav,title:"books",books})

})
return booksRouter}
module.exports=router