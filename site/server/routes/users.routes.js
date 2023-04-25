const UserController = require('../controller/users.controller')

module.exports = (app) => {
    app.get('/api/users', UserController.getAllUsers)
    app.get('/api/users/:id', UserController.getOneUser);
    app.delete('/api/users/:id', UserController.deleteUser);
    app.put('/api/users/:id', UserController.updateUser);
    app.post('/api/users', UserController.createUser);
}