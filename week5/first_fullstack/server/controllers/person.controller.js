const Person = require('../models/person.model');


// below are all methods we can create; make sure you coordinate this between this file and routes
module.exports.findAllPeople = (request, response) => {
    Person.find()
        .then((allUsers) => {
            response.json({ users : allUsers })
        })
        .catch((error) => {
            response.json({ message : 'Something went wrong. Check it out: '})
        })
}

module.exports.index = (request, response) => {  //We are exporting a key:val pair of index : function
    response.json({     // This is where we're setting the API's response to the requesting client
    message: "Hello World and many more!"
    });
}

module.exports.createUser = (request, response) => {
    Person.create(request.body) //This will use whatever the body of the client's request sends over
        .then(person => response.json(person))
        .catch(err => response.json(err));
}

module.exports.findOneUser = (request, response) => {
    console.log(request.params)
    Person.findOne({ _id : request.params.id})
        .then((oneUser) => {
            response.json({ user : oneUser})
        })
        .catch((error) => {
            response.json({ message : 'This is an error message' + error})
        })
}

module.exports.updateUser = (request, response) => {
    Person.findOneAndUpdate({ _id : request.params.id }, request.body, { new : true, runValidators : true})
        .then((updatedUser) => {
            response.json({ user : updatedUser})
        })
        .catch((error) => {
            response.json({ message : 'Errors again.' + error})
        })
}

module.exports.deleteUser = (request, response) => {
    Person.deleteOne({ _id : request.params.id })
        .then((result) => {
            response.json({ result : result })
        })
        .catch((error) => {
            response.json({ message : 'Errors again' + error})
        })
}