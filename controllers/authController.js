const mongoose = require("mongoose");
const User = require("../database/modals/userSchema");
const Game = require("../database/modals/gameSchema");

exports.createGame = async (req, res) => {
    try {
        const { username } = req.body;

        const userExist = User.findOne({
            username: username
        });

        if (userExist) {
            res.status(401).json({ "error": "User with that name already exists" });
        }

        const gameRoom = await new Game({
            owner: username,
            participants: [username],
            name: `${username}'s room`,
        });

        await new User({
            username: username,
            room: gameRoom._id
        });

        res.status(200).json({ "message": `Game room created successfully with password: ${gameRoom._id}` });
    } catch (error) {
        res.status(500).json({ "error": "Something went wrong try again later" });
        console.log(error);
    }
}

exports.joinGame = async (req, res) => {
    try {
        const { username, password } = req.body;

        const gameRoom = await Game.findOne({
            _id: password
        });

        if (!gameRoom) {
            res.status(404).json({ "error": "Room not found" });
        }
        
        const userExist = User.findOne({
            username: username
        });

        if (userExist) {
            res.status(401).json({ "error": "User with that name already exists" });
        }

        await Game.updateOne({
            _id: password,
        }, {
            $push: {
                participants: username
            },
        });

        res.status(200).json({ "message": "You successfully joined the game room" });
    } catch (error) {
        res.status(500).json({ "error": "Something went wrong try again later" });
        console.log(error);
    }
}

exports.deleteGame = async (req, res) => {
    try {
        const { password } = req.body;

        const gameRoom = await Game.findOne({
            _id: password
        });

        if (!gameRoom) {
            res.status(404).json({ "error": "Room not found" });
        }

        await Game.deleteOne({
            _id: password
        });

        res.status(200).json({ "message": "You successfully deleted the game room" });
    } catch (error) {
        res.status(500).json({ "error": "Something went wrong try again later" });
        console.log(error);
    }
}