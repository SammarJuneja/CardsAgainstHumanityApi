const { validationResult } = require('express-validator');
const User = require("../database/modals/userSchema");
const Game = require("../database/modals/gameSchema");

exports.createGame = async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { username } = req.body;

        const userExist = await User.findOne({ username: username });

        if (userExist) {
            return res.status(401).json({ "error": "User with that name already exists" });
        }

        const gameRoom = new Game({
            owner: username,
            participants: [username],
            name: `${username}'s room`,
        });
        await gameRoom.save();

        const user = new User({
            username: username,
            room: gameRoom._id
        });
        await user.save();

        req.app.get("io").to(gameRoom._id).emit("create", { user: username });
        res.status(200).json({ "message": `Game room created successfully with password: ${gameRoom._id}` });
    } catch (error) {
        res.status(500).json({ "error": error.message });
        console.log(error);
    }
}

exports.joinGame = async (req, res) => {
    try {
        const { username, password } = req.body;

        const gameRoom = await Game.findOne({ _id: password });

        if (!gameRoom) {
            return res.status(404).json({ "error": "Room not found" });
        }
        
        const userExist = User.findOne({ username: username });

        if (userExist) {
            return res.status(401).json({ "error": "User with that name already exists" });
        }

        await Game.updateOne({
            _id: password,
        }, {
            $push: {
                participants: username
            },
        });

        req.app.get("io").to(gameRoom._id).emit("join", { user: username });

        res.status(200).json({
            "message": `${username} successfully joined the game room`,
            "user": userExist
        });
    } catch (error) {
        res.status(500).json({ "error": error.message });
        console.log(error);
    }
}

exports.deleteGame = async (req, res) => {
    try {
        const { password } = req.body;

        const gameRoom = await Game.findOne({ _id: password });

        if (!gameRoom) {
           return res.status(404).json({ "error": "Room not found" });
        }

        await Game.deleteOne({ _id: password });

        res.status(200).json({ "message": "You successfully deleted the game room" });
    } catch (error) {
        res.status(500).json({ "error": error.message });
        console.log(error);
    }
}