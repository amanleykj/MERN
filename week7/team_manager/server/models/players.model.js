const mongoose = require('mongoose')

const PlayerSchema = new mongoose.Schema({
    playerName : {
        type : String,
        required : [ true, "You must include a player name."],
        minLength : [ 2, "Player name must be at least two characters."]
    },
    
    prefPosition : {
        type : String
    },

    gameOneStatus : {
        type : String
    },

    gameTwoStatus : {
        type : String
    },

    gameThreeStatus : {
        type : String
    }
    
}, { timestamps : true })

const Player = mongoose.model('Player', PlayerSchema)

module.exports = Player