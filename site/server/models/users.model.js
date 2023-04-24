const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const { isEmail } = require('validator')

const UserSchema = new mongoose.Schema({
    userFirstName : {
        type : String,
        required : [ true, "Please enter your first name here."]
    },

    userLastName : {
        type : String,
        required : [ true, "Please include your last name here."]
    },

    userEmail : {
        type :  String,
        required : [ true, "Please include your email address here."],
        validate : [ isEmail, "Invalid email."]
    },

    userPassword : {
        type : String,
        required : [ true, "Please include a password here."],
        minLength : [ 8, "Your password must be at least eight characters long."]
    }
}, { timestamps :  true})

UserSchema.virtual('confirmPassword')
    .get(() => this.confirmPassword)
    .set(value => this.confirmPassword = value)

UserSchema.virtual('validate', function(next){
    if(this.userPassword !== this.confirmPassword){
        this.invalidate('confirmPassword', 'Passwords do not match.')
    }
    next();
})

UserSchema.pre('save', function(next){
    bcrypt.hash(this.userPassword, 10)
        .then(hash => {
            this.userPassword = hash;
            next()
        })
})

module.exports = mongoose.model('User', UserSchema)