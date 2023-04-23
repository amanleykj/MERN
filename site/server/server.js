const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const PORT = 8000

app.use(express.json())

app.use(express.urlencoded({ extended : true }))
require('./config/mongoose.config')

const UserRoutes = require('./routes/users.routes')
UserRoutes(app)

app.listen(PORT, console.log(`You are now listening on port ${PORT}`))