const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/libraryDb')


const Schema=mongoose.Schema;
const BookSchema = new Schema({
    title: String,
    author: String,
    type: String,
    img: String
},{strict:false});

var Bookdata = mongoose.model('bookdata',BookSchema);

module.exports = Bookdata;

