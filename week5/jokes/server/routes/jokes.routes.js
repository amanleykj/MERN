const JokeController = require('../controllers/jokes.controller')

module.exports = (app) => {
    app.get('/api/allJokes', JokeController.getAllJokes);
    app.get('/api/oneJoke/:id', JokeController.getOneJoke);
    app.post('/api/createJoke', JokeController.createJoke);
    app.put('/api/updateJoke/:id', JokeController.updateJoke);
    app.delete('/api/deleteJoke/:id', JokeController.deleteJoke);
}