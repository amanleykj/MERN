const Comment = require('../models/comments.model')
const secret = process.env.SECRET_KEY

module.exports = {
    createComment : ( request, response ) => {
        User.create(request.body)
        .then((newComment) => {
            response. status(200).json(newComment)
        })
        .catch((error) => {
            response.status(400).json(error)
        })
    },

    deleteComment : ( request, response ) => {
        User.deleteOne({ _id : request.params.id })
        .then((result) => {
            console.log('Comment has been deleted.')
            response.status(204).json({ result :  result })
        })
        .catch((error) => {
            response.json({ message : 'Error is: ' + error })
        })
    },

    getOneComment : ( request, response ) => {
        User.findOne({ _id : request.params.id })
        .then((oneComment) => {
            response.status(200).json(oneComment)
        })
        .catch((error) => {
            response.status(400).json(error)
        })
    },

    getAllComments : ( request, response ) => {
        User.find()
        .then((allComments) => {
            response.status(200).json(allComments)
            console.log(allComments)
        })
        .catch((error) => {
            response.status(400).json(error)
        })
    }
}