const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    room: {
        type: mongoose.Schema.Types.ObjectId
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;