const mongoose = require('mongoose')
const validate = require('validator')


const CommentSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : [ true, "Please enter your first name here."]
    },

    lastName : {
        type : String,
        required : [ true, "Please include your last name here."]
    },

    email : {
        type :  String,
        required : [ true, "Please include your email address here."],
        validate : [ isEmail, "Invalid email."]
    },

    comment : {
        type : String,
        required : [ true, "Please include your question/comment here."],
        minLength : [ 15, "Your question or comment must be at least 15 characters long."]
    }
}, { timestamps :  true})

module.exports = mongoose.model('Comment', CommentSchema)