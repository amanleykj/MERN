const express = require('express');
const cors = require('cors')
const app = express();
const port = 8000;
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended : true }));
require('./config/mongoose.config');

const JokeRoutes = require('./routes/jokes.routes')
JokeRoutes(app)


app.listen(port, () => {`Take a listen on port ${port}`})