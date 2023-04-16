const AuthorController = require('../controllers/authors.controller')

module.exports = (app) => {
    app.get('/api/allAuthors', AuthorController.getAllAuthors)
    app.get('/api/oneAuthor/:id', AuthorController.getOneAuthor)
    app.post('/api/newAuthor', AuthorController.createAuthor)
    app.put('/api/updateAuthor/:id', AuthorController.updateAuthor)
    app.delete('/api/deleteAuthor/:id', AuthorController.deleteAuthor)
}