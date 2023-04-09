const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 8000

app.use(express.json());

app.use(express.urlencoded({ extended : true }));
require('./config/mongoose.config');

const ProductRoutes = require('./routes/products.routes')
ProductRoutes(app)


app.listen(port, () => console.log(`Listening on port ${port}`))