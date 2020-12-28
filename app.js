
const express=require('express');
const bodyParser=require('body-parser');
const app=express();

const nav=[
    {link:'/',name:'home'},
    {link:'/books',name:'books'},
    {link:'/authors',name:'authors'},
    {link:'/admin',name:'AddBook'}
]

const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorRouter = require('./src/routes/authorRoutes')(nav);
const adminRouter = require('./src/routes/adminRoutes')(nav);



app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('./public'));
app.set('view engine','ejs')
app.set('views',__dirname+'/src/views')

app.use('/books',booksRouter);

app.use('/authors',authorRouter);

app.use('/admin',adminRouter);

app.get('/',(req,res)=>{
    res.render("index",{

        nav,
        title:'library'
    })
})


app.listen(5000,()=>{
    console.log("5000 listening")
})


