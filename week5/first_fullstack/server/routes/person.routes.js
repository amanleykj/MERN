const PersonController = require('../controllers/person.controller');  //Import the code from Code Block 1

module.exports = (app) => {
    app.get('/api/allUsers', PersonController.findAllPeople);
    app.get('/api', PersonController.index);
    app.post('/api/people', PersonController.createPerson);
    app.get('/api/oneUser/:id', PersonController.findOneUser);
    app.put('/api/updateUser/:id', PersonController.updateUser);
    app.delete('/api/deleteUser/:id', PersonController.deleteUser);
}
