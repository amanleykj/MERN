const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const PORT = 8000

app.use(express.json())

app.use(express.urlencoded({ extended : true}))\
require('./config/mongoose.config')

const PlayerRoutes = require('./routes/players.routes')
PlayerRoutes(app)

app.listen(PORT, console.log(`Listening just fine on ${PORT}`))