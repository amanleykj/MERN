const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const socket = require('socket.io');
const PORT = 8000

app.use(express.json())

app.use(express.urlencoded({ extended : true }))
require('./config/mongoose.config')

const PetRoutes = require('./routes/chatapp.routes')
PetRoutes(app)

const server = app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});

const io = socket(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
        allowedHeaders: ['*'],
        credentials: true,
    }
});

io.on("connection", socket => {
    console.log('socket id : ' + socket.id);
    socket.on('event_from_client', data => {
        socket.broadcast.emit('Event here', data);
    })
})
