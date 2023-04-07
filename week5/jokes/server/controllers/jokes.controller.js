const Joke = require('../models/jokes.model')

module.exports = {
    getAllJokes : (request, response) => {
        Joke.find()
        .then((allJokes) => {
            response.status(200).json(allJokes)
            console.log(allJokes)
        })
        .catch((error) => response.status(400).json(error))
    },

    createJoke : ( request, response ) => {
        Joke.create(request.body)
        .then((newJoke) => {
            response.status(200).json(newJoke)
        })
        .catch((error) => {
            response.status(400).json(error)
        })
    },

    getOneJoke : ( request, response ) => {
        Joke.findOne({ _id : request.params.id})
            .then((oneJoke) => {
                response.status(200).json(oneJoke)
            })
            .catch((error) => {
                response.status(400).json(error)
            })
    },

    updateJoke : ( request, response) => {
        Joke.findOneAndUpdate({ _id : request.params.id }, request.body, { new : true, runValidators : true})
            .then((updatedJoke) => {
                response.json({ joke : updatedJoke})
            })
            .catch((error) => {
                response.json({ message : 'Errors are here' + error})
            })
    },

    deleteJoke : ( request, response ) => {
        Joke.deleteOne({ _id : request.params.id })
            .then((result) => {
                response.json({ result : result})
            })
            .catch((error) => {
                response.json({ message : 'Errors are here' + error})
            })
    }

}