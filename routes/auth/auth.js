const { Router } = require("express");
const router = Router();
const { createGame, joinGame } = require("../../controllers/authController");

router.post("/creategame", createGame);

router.post("/joingame", joinGame);