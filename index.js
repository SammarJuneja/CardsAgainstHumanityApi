const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const mongoose = require("mongoose")
const { connectDatabase } = require("./database/index.js");

connectDatabase();

// try {
//     mongoose.connect(config.MONGO);
//     console.log("Successfully connected to database");
// } catch (error) {
//     console.log(`Error while connecting to database ${error}`);
// }

const auth = require("./routes/auth/index.js");
const game = require("./routes/game/index.js");

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use("/api/v1/auth", auth);
app.use("/api/v1/game", game);

app.get("/", (req, res) => {
    res.send("<h2>This is the api for cards against humanity made by SammarJuneja<h2>");
});

io.on("connection", (socket) => {
    console.log("A user connected");
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});