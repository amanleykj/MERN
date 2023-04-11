const ProductController = require('../controllers/products.controller')

module.exports = (app) => {
    app.get('/api/allProducts', ProductController.getAllProducts);
    app.get('/api/oneProduct/:id', ProductController.getOneProduct);
    app.post('/api/createProduct', ProductController.createProduct);
    app.put('/api/updateProduct/:id', ProductController.updateProduct);
    app.delete('/api/deleteProduct/:id', ProductController.deleteProduct);
}