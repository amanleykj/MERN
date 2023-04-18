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

    getOnePlayer : ( request, response) => {
        Player.findOne({ _id : request.params.id })
        .then((onePlayer) => {
            response.status(200).json(onePlayer)
        })
        .catch((error) => {
            response.json(400).json(error)
        })
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
            console.log(result)
            console.log('Successfully deleted that player.')
            response.status(204).json({ result : result})
        })
        .catch((error) => {
            response.json({ message : 'Error(s) are as follows: ' + error})
        })
    }

}