const User = require('../models/users.model')

module.exports = {
    createUser : ( request, response ) => {
        User.create(request.body)
        .then((newUser) => {
            response. status(200).json(newUser)
        })
        .catch((error) => {
            response.status(400).json(error)
        })
    },

    updateUser : ( request, response ) => {
        User.findOneAndUpdate({ _id : request.params.id }, request.body, { new : true, runValidators : true })
        .then((updatedUser) => {
            response.status(200).json(updatedUser)
        })
        .catch((error) => {
            response.status(400).json(error)
        }) 
    },

    deleteUser : ( request, response ) => {
        User.deleteOne({ _id : request.params.id })
        .then((result) => {
            console.log('User has been deleted.')
            response.status(204).json({ result :  result })
        })
        .catch((error) => {
            response.json({ message : 'Error is: ' + error })
        })
    },

    getOneUser : ( request, response ) => {
        User.findOne({ _id : request.params.id })
        .then((oneUser) => {
            response.status(200).json(oneUser)
        })
        .catch((error) => {
            response.status(400).json(error)
        })
    }
}