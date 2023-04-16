const Author = require('../models/authors.model')

module.exports = {
    getAllAuthors : ( request, response ) => {
        Author.find()
        .then((allAuthors) => {
            response.status(200).json(allAuthors)
            console.log(allAuthors)
        })
        .catch((error) => response.status(400).json(error))
    },

    createAuthor : ( request, response ) => {
        Author.create(request.body)
        .then((newAuthor) => {
            response.status(200).json(newAuthor)
        })
        .catch((error) => {
            response.status(400).json(error)
        })
    },

    getOneAuthor : ( request, response ) => {
        Author.findOne({ _id : request.params.id })
        .then((oneAuthor) => {
            response.status(200).json(oneAuthor)
        })
        .catch((error) => {
            response.status(400).json(error)
        })
    },

    deleteAuthor : ( request, response ) => {
        Author.deleteOne({ _id : request.params.id })
        .then((result) => {
            console.log('Successfully deleted the author.')
            response.status(204).json({ result : result })
        })
        .catch((error) => {
            response.json({ message : 'Error(s) are as follows: ' + error })
        })
    },

    updateAuthor : ( request, response ) => {
        Author.findOneAndUpdate({ _id : request.params.id }, request.body, { new : true, runValidators : true })
        .then((updatedAuthor) => {
            response.status(201)
            response.json({ author : updatedAuthor })
        })
        .catch((error) => {
            response.json({ message : 'Error(s) are as follows: ' + error})
        })
    }
}