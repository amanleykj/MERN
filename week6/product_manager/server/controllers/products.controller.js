const Product = require('../models/products.model')

module.exports = {
    
    getAllProducts : ( request, response ) => {
        Product.find()
        .then((allProducts) => {
            response.status(200).json(allProducts);
            console.log(allProducts)
        })
        .catch((error) => response.status(400).json(error))
    },

    createProduct : ( request, response ) => {
        Product.create(request.body)
        .then((newProduct) => {
            response.status(200).json(newProduct)
        })
        .catch((error) => {
            response.status(400).json(error)
        })
    },

    getOneProduct : ( request, response ) => {
        Product.findOne({ _id : request.params.id })
        .then((oneProduct) => {
            response.status(200).json(oneProduct)
        })
        .catch((error) => {
            response.status(400).json(error)
        })
    }

}