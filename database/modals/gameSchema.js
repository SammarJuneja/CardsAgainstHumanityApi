const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
    owner: {
        type: String,
        required: true,
    },
    participants: [{
        type: String
    }],
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;