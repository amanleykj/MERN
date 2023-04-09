const ProductController = require('../controllers/products.controller')

module.exports = (app) => {
    app.get('/api/allProducts', ProductController.getAllProducts);
    app.get('/api/oneProduct', ProductController.getOneProduct);
    app.post('/api/createProduct', ProductController.createProduct);
}