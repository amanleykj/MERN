const mongoose = require('mongoose')

const PetSchema = new mongoose.Schema({
    petName : {
        type : String,
        required : [ true, "Be sure to include a pet name."],
        minLength : [ 3, "Your pet name must be at least three characters long."] 
    },
    petType : {
        type : String,
        required : [ true, "You must include a pet type."],
        minLength : [ 3, "Your type of pet must be at least three characters long."]
    },
    description : {
        type : String,
        required : [ true, "Please provide a description of this pet."],
        minLength : [ 3, "Your description must be at least three characters long."]
    },
    skillOne : {
        type : String
    },
    skillTwo : {
        type : String
    },
    skillThree : {
        type : String
    }
}, { timestamps : true})

const Pet = mongoose.model('Pet', PetSchema)
module.exports = Pet