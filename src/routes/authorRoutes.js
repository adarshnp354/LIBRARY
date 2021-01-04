
const express=require('express');
const Authordata = require('../model/Authordata');
const authorsRouter=express.Router();

function router(nav){
    // var authors=[{
    //     name:'Name 1',
    //     age:'Age:20',
    //     place:'Place 1',
    //     img:'1avatar.png'
    // },{
    //     name:'Name 2',
    //     age:'Age:21',
    //     place:'Place 2',
    //     img:'avatar2.png'
    // },{
    //     name:'Name 3',
    //     age:'Age:22',
    //     place:'Place 3',
    //     img:'img_avatar.png'
    // },{
    //     name:'Name 4',
    //     age:'Age:23',
    //     place:'Place 4',
    //     img:'img_avatar3.png'
    // },{
    //     name:'Name 5',
    //     age:'Age:24',
    //     place:'Place 5',
    //     img:'owl.png'
    // }]

    authorsRouter.get('/',(req,res)=>{
    Authordata.find()
    .then((authors)=>{
        res.render("authors",{nav,title:"authors",authors})
    })
   
    })

    authorsRouter.get('/:id',(req,res)=>{
    const id = req.params.id;
    Authordata.findOne({_id:id})
    .then((author)=>{
        res.render('author',{nav,title:"author",author})
    })
    })



return authorsRouter}
module.exports=router
