const { Router } = require("express");
const router = Router();
const { createGame, joinGame, deleteGame } = require("../../controllers/authController");
const { validationResult, body } = require("express-validator");

router.post("/creategame",
    [
        body("username")
        .trim().escape()
        .notEmpty().withMessage("Username is not provided")
    ],
    createGame
);

router.post("/joingame", joinGame);

router.post("/deletegame", deleteGame);

module.exports = router;