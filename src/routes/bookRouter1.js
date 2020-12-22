const exprerss=require('express');
const bookRouter1=exprerss.Router();


function router(nav){
    var details=[{
        title:'asg',
        price:'222',
        author:''
    },{
        title:'swds',
        price:'122',
        author:''
    },{
        title:'qwwd',
        price:'267',
        author:''
    },{
        title:'wqwq',
        price:'123',
        author:''
    },{
        title:'aseed',
        price:'234',
        author:''
    }]
bookRouter1.get('/',(req,res)=>{
    res.render("book1",{nav,title:"book1",book1})
})
return bookRouter1}
module.exports=router