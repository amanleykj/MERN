const express = require('express');
const app = express();
const port = 8000;

// below allows you to post data to the database (below is called )
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const createUser = () => ({
    password : faker.internet.password(),
    email : faker.internet.email(),
    phoneNumber : faker.phone.number(),
    lastName : faker.name.lastName(),
    firstName : faker.name.firstName(),
    _id : faker.database.mongodbObjectId()
});

const createCompany = () => ({
    _id : faker.database.mongodbObjectId(),
    name : faker.company.name(),
    address : [
        {street : faker.address.street()},
        {city : faker.address.city()},
        {state : faker.address.state()},
        {zipCode : faker.address.zipCode()},
        {country : faker.address.country()}
        ]
}); 

app.post('/api/postData', (request, response) => {
    console.log(request.body);
    response.json({ message : request.body})
})

app.get("/api/users/new", (request, response) => {
const newUserMake = createUser();
response.json(newUserMake)
})

app.get("/api/companies/new", (request, response) => {
const newCompanyMake =  createCompany();
response.json(newCompanyMake)
})

app.get("/api/user/company", (request, response) => {
const newUserMake = createUser();
const newCompanyMake = createCompany();
const togetherObject = {
    user : newUserMake,
    company : newCompanyMake
};
response.json(togetherObject);
})

app.listen(port, console.log(`You're at the bestest port there is, and it's ${port}`))