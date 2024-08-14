const mongoose = require("mongooose");
const { config } = require("./config");

export function connectDatabase() {
    try {
        mongoose.connect(config.MONGO);
        console.log("Successfully connected to database");
    } catch (error) {
        console.log("Error while connecting to database");
    }
}