const express = require('express');
const cors = require('cors');
// allows shared resources between ports (8000 and 3000)
const app = express();
app.use(cors());
// { origin : http://localhost:3000 } this part can be included in the cors() above
const PORT = 8000

app.use(express.json());

app.use(express.urlencoded({ extended : true }));
require('./config/mongoose.config');

const ProductRoutes = require('./routes/products.routes')
ProductRoutes(app)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))