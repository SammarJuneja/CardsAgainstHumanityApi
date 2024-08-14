const { Router } = require("express");
const router = Router();
const { getWhiteCrads, getBlackCard, playWhiteCard } = require("../../controllers/gameController");

router.get("/whitecards", getWhiteCrads);

router.get("/blackcards", getBlackCard);

router.get("/playwhitecard", playWhiteCard);