const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
    projectName : {
        type : String,
        required : [ true, "Please enter your first name here."]
    },

    stack : {
        type : String,
        required : [ true, "Please include your last name here."]
    },

    shortDescription : {
        type :  String,
        required : [ true, "Please include your email address here."]
    },

    contactTag : {
        type : String
    }
}, { timestamps :  true})

module.exports = mongoose.model('Project', ProjectSchema)