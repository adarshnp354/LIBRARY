const express=require('express');
const bodyParser=require('body-parser');
const app=express();

const nav=[
    {link:'/',name:'home'},
    {link:'/books',name:'books'},
    {link:'/authors',name:'authors'}
]

const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorRouter = require('./src/routes/authorRoutes')(nav);



app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('./public'));
app.set('view engine','ejs')
app.set('views',__dirname+'/src/views')

app.use('/books',booksRouter);

app.use('/authors',authorRouter);

app.get('/',(req,res)=>{
    res.render("index",{

        nav,
        title:'library'
    })
})


app.listen(5000,()=>{
    console.log("5000 listening")
})


