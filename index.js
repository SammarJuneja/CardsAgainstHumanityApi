const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const { connectDatabase } = require("./server");

const auth = require("./routes/auth");
const game = require("./routes/game");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use("/auth", auth);
app.use("/game", game);

app.get("/", (req, res) => {
    res.send("<h2>This is the api for cards against humanity made by SammarJuneja<h2>");
});

io.on("connection", (socket) => {
    console.log("A user connected");
});

server.listen(3000, () => {
    console.log("server running on port 3000");
    connectDatabase();
});