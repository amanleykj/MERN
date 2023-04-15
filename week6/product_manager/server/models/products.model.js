const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true, "Be sure to include a product title here."],
        minLength : [5, "Your product must be at least five characters long."],
        maxLength : [50, "Please keep your product title under 50 characters."]
    },
    price : {
        type : Number,
        required : [true, "Be sure to include a price for your product here."],
        min : [1, "All products must be at least $1 to list on our site."]
    },
    description : {
        type : String,
        required : [true, "Be sure to include a description of your product here."],
        minLength : [10, "Your production description must be at least 15 characters."],
        maxLength : [200, "Please keep your product description under 200 characters."]
    }
}, { timestamps : true});

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product