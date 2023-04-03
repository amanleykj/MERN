const express = require("express");
const app = express();
const port = 8001;
// we can create a function to return a random / fake "Product"
const { faker } = require('@faker-js/faker');

// const createProduct = () => {
//     const newFake = {
//         name: faker.commerce.productName(),
//         price: "$" + faker.commerce.price(),
//         department: faker.commerce.department()
//     };
//     return newFake;
// };
    
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

// -------------------------------
// -------------------------------
// -------------------------------
// -------------------------------
// -------------------------------

app.get("/api/users/new", (request, response) => {
    const newUserMake = createUser();
    response.json(newUserMake)
})

app.get("/api/companies/new", (request, response) => {
    const newCompanyMake = createCompany();
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

app.listen(port, () => console.log(`Listening to the coolest port, which is port ${port}`))