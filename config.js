require("dotenv").config();
load_env()

export const config = {
    "MONGO": process.env.MONGO_URI
}