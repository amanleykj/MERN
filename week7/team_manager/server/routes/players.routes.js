const PlayerController = require('../controllers/players.controller')

module.exports = (app) => {
    app.get('/api/players', PlayerController.getAllPlayers);
    app.post('/api/players', PlayerController.createPlayer);
    app.delete('/api/players/:id', PlayerController.deletePlayer);
}