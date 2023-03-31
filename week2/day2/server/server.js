const express = require("express");
// require here means 'import'; this is actually the word used when using "plain old JavaScript"
const app = express();
// employee is this variable; THIS IS MACY
const port = 8000;
// this is the booth (location) of our server

// make sure these lines are above any app.get or app.post code blocks
// this is to let you POST data
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );



// LIST OF INSTRUCTIONS ARE GOING TO GO HERE
// notes from Brendan : post => body => raw checkbox => json dropdown => insert data in the textarea

app.get("/api", (request, response) => {
    response.json({ message: "T-t-time to leave?" });
});

app.post("/api/postData", (request, response) => {

    console.log(request.body);
    response.json({ requestBody : request.body})
})






console.log("Hi there friends and MONKEYFRIENDS!")
app.listen( port, () => console.log(`Listening right now on port: ${port}`) );
// after this, run nodemon server.js
// this needs to be below the other code blocks; this is like having Macy sit down and clock in and 
// begin to listen to a request from a client
