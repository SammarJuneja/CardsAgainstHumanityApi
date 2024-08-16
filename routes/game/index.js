const { Router } = require("express");
const validator = require("express-validator");
const router = Router();
const { getWhiteCrads, getBlackCard, playWhiteCard, czarCard } = require("../../controllers/gameController");

router.get("/whitecards", getWhiteCrads);

router.get("/blackcards", getBlackCard);

router.post("/playwhitecard", playWhiteCard);

router.post("/selectblackcard", czarCard);

module.exports = router;