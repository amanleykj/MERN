const PlayerController = require('../controllers/players.controller')

module.exports = (app) => {
    app.get('/api/players', PlayerController.getAllPlayers);
    app.get('/api/players/:id', PlayerController.getOnePlayer);
    app.post('/api/players', PlayerController.createPlayer);
    app.put('/api/players/:id', PlayerController.updatePlayer)
    app.delete('/api/players/:id', PlayerController.deletePlayer);
}