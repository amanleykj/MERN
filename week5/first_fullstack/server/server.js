const express = require('express');
const app = express();
const cors = require('cors')

const port = 8000;

app.use(cors());

app.use(express.json());                           /* This is new and allows JSON Objects to be posted */
app.use(express.urlencoded({ extended: true }));   /* This is new and allows JSON Objects with strings and arrays*/
require('./config/mongoose.config'); // calling the mongoose.config file and running the connect function

const PersonRoutes = require('./routes/person.routes')
PersonRoutes(app)
 // We're importing the routes export. 
// These two lines are the long-hand notation of the code above. They better show what's going on.
    // const personRoutes = require("./routes/person.routes");  <-- assign the exported function to a const
    // personRoutes(app);     <-- invoke the function and pass in the express "app" server



app.listen(port, () => console.log(`Listening on port: ${port}`) );