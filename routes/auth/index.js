const { Router } = require("express");
const router = Router();
const { createGame, joinGame, deleteGame } = require("../../controllers/authController");

router.post("/creategame", createGame);

router.post("/joingame", joinGame);

router.post("/deletegame", deleteGame);

module.exports = router;