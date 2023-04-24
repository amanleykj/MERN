const Pet = require('../models/chatapp.model')

module.exports = {
    getAllPets : ( request, response ) => {
        Pet.find()
            .then((allPets) => {
                response.status(200).json(allPets)
            })
            .catch((error) => {
                response.status(400).json(error)
            })
    },

    createPet : ( request, response ) => {
        Pet.create(request.body)
            .then((newPet) => {
                response.status(200).json(newPet)
            })
            .catch((error) => {
                response.status(400).json(error)
            })
    },

    getOnePet : ( request, response ) => {
        Pet.findOne({ _id : request.params.id })
            .then((onePet) => {
                response.status(200).json(onePet)
            })
            .catch((error) => {
                response.status(400).json(error)
            })
    },

    deletePet : ( request, response ) => {
        Pet.deleteOne({ _id : request.params.id })
            .then((result) => {
                console.log('Successfully got rid of that pet.')
                response.status(204).json({ result : result })
            })
            .catch((error) => {
                response.json({ message : 'Error is the following: ' + error})
            })
    },

    updatePet : ( request, response) => {
        Pet.findOneAndUpdate({ _id : request.params.id }, request.body, { new : true, runValidators : true})
            .then((updatedPet) => {
                response.status(200).json(updatedPet)
            })
            .catch((error) => {
                response.status(400).json(error)
            })
    }

}