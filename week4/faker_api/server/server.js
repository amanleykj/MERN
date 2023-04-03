const express = require('express');
const app = express();
const port = 8000;



app.get("/api", (request, response) => {
    response.json({ message : 'Hello Worldy'})
})


app.listen( port, () => console.log(`Listening on the cool port ${port}`));