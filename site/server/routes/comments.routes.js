const CommentController = require('../controller/comments.controller')

module.exports = (app) => {
    app.get('/api/comments', CommentController.getAllComments)
    app.get('/api/comments/:id', CommentController.getOneComment);
    app.delete('/api/comments/:id', CommentController.deleteComment);
    app.post('/api/comments', CommentController.createComment);
}