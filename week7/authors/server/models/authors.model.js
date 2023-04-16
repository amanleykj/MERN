const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : [ true, "Make sure you include a name here." ],
        minLength : [ 3, "Make sure your author's first name is at least three characters long." ]
    },
    lastName : {
        type : String,
        required : [ true, "Make sure you include a name here."],
        minLength : [ 3, "Make sure your author's last name is at least three characters long."]
    }
}, { timestamps : true })

const Author = mongoose.model('Author', AuthorSchema)

module.exports = Author