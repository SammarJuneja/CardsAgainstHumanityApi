const mongoose = require("mongoose");
const { config } = require("../config");

exports.connectDatabase = () => {
    try {
        mongoose.connect(config.MONGO);
        console.log("Successfully connected to database");
    } catch (error) {
        console.log(`Error while connecting to database ${error}`);
    }
}