const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const { connectDatabase } = require("./server");

connectDatabase();

const routes = require("./routes");

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use("/api/v1", routes)

app.get("/", (req, res) => {
    res.send("<h2>This is the api for cards against humanity made by SammarJuneja<h2>");
});

io.on("connection", (socket) => {
    console.log("A user connected");
});

server.listen(3000, () => {
    console.log("server running on port 3000");
});