const Player = require('../models/players.model')

module.exports = {
    getAllPlayers : ( request, response ) => {
        Player.find()
        .then((allPlayers) => {
            response.status(200).json(allPlayers)
            console.log(allPlayers)
        })
        .catch((error) => response.status(400).json(error))
    },

    createPlayer : ( request, response ) => {
        Player.create(request.body)
        .then((newPlayer) => {
            response.status(200).json(newPlayer)
        })
        .catch((error) => {
            response.status(400).json(error)
        })
    },

    deletePlayer : ( request, response ) => {
        Player.deleteOne({ _id : request.params.id })
        .then((result) => {
            console.log('Successfully deleted that player.')
        })
        .catch((error) => {
            response.json({ message : 'Error(s) are as follows: ' + error})
        })
    }

}