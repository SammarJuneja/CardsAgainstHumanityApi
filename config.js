require("dotenv").config();
load_env()

const config = {
    "MONGO": process.env.MONGO_URI
}

module.exports = config;