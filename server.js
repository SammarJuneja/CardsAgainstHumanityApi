const mongoose = require("mongoose");
const { config } = require("./config");

function connectDatabase() {
    try {
        mongoose.connect(config.MONGO);
        console.log("Successfully connected to database");
    } catch (error) {
        console.log("Error while connecting to database");
    }
}

module.exports = connectDatabase();