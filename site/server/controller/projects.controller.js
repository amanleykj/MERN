const Project = require('../models/projects.model')
const secret = process.env.SECRET_KEY

module.exports = {
    createProject : ( request, response ) => {
        Project.create(request.body)
        .then((newProject) => {
            response. status(200).json(newProject)
        })
        .catch((error) => {
            response.status(400).json(error)
        })
    },

    deleteProject : ( request, response ) => {
        Project.deleteOne({ _id : request.params.id })
        .then((result) => {
            console.log('Project has been deleted.')
            response.status(204).json({ result :  result })
        })
        .catch((error) => {
            response.json({ message : 'Error is: ' + error })
        })
    },

    getOneProject: ( request, response ) => {
        Project.findOne({ _id : request.params.id })
        .then((oneProject) => {
            response.status(200).json(oneProject)
        })
        .catch((error) => {
            response.status(400).json(error)
        })
    },

    getAllProjects : ( request, response ) => {
        Project.find()
        .then((allProjects) => {
            response.status(200).json(allProjects)
            console.log(allProjects)
        })
        .catch((error) => {
            response.status(400).json(error)
        })
    }
}