
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/libraryDb',{
    useNewUrlParser: true,
    useUnifiedTopology: true
    })

const Schema = mongoose.Schema
const AuthorSchema = new Schema({
    name: String,
    place: String,
    age: String,
    img: String
},{strict:false})

var Authordata = mongoose.model('Authordata',AuthorSchema)

module.exports = Authordata;

