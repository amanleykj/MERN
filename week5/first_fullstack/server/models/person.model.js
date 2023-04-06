const mongoose = require('mongoose');
// above is generally constant

// below is what's being altered

const PersonSchema = new mongoose.Schema({
    firstName: { 
        type: String, 
        required : [true, 'First name is required here.'],
        minLength : [3, 'Your name must be at least three characters long.'],
        maxLength : [10, 'Your name cannot be longer than ten characters.']
},
    lastName: { 
        type: String,
        required : [true, 'Last name is required here.'],
        minLength : [3, 'Your name must be at least three characters long.'],
        maxLength : [10, 'Your name cannot be longer than ten characters.']
}
}, { timestamps: true });

// NUMBERS AND MORE
// min : [1920, 'No shows before 1920 are allowed']
// min is for numbers; minLength is for strings

// below is generally constant
const Person = mongoose.model('Person', PersonSchema)

module.exports = Person
