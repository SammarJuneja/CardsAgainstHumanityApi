const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
    owner: {
        type: String,
        required: true
    },
    participants: [{
        type: String
    }],
    name: {
        type: String,
        required: true
    },
    czar: {
        type: String
    },
    blackCard: {
        type: String
    },
    czarCard: {
        type: String
    },
    active: {
        type: Boolean,
        default: false
    },
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;