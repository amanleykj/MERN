const ProjectController = require('../controller/projects.controller')

module.exports = (app) => {
    app.get('/api/projects', ProjectController.getAllProjects);
    app.get('/api/projects/:id', ProjectController.getOneProject);
    app.delete('/api/projects/:id', ProjectController.deleteProject);
    app.post('/api/projects', ProjectController.createProject);
}