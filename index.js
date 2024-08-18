const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const { connectDatabase } = require("./database/index.js");
connectDatabase();

const auth = require("./routes/auth/index.js");
const game = require("./routes/game/index.js");

const app = express();
const server = createServer(app);
const io = new Server(server);

app.set("io", io);

app.use("/api/v1/auth", auth);
app.use("/api/v1/game", game);

app.get("/", (req, res) => {
    res.send("<h2>This is the api for cards against humanity made by SammarJuneja<h2>");
});

io.on("connection", (socket) => {
    socket.on("create", (username) => {
        console.log(`${username} created the room`);
    });

    socket.on("join", (username) => {
        console.log(`${username} joined the room`);
    });

    socket.on("delete", (username) => {
        console.log(`${username} left the room`);
    });

    socket.on("whiteCard", (username, card) => {
        console.log(`${username} selected ${card}`);
    });

    socket.on("balckCard", (card) => {
        console.log(`Czar selected ${card}`);
    });
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});