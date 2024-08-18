const { Router } = require("express");
const validator = require("express-validator");
const router = Router();
const { getWhiteCrads, getBlackCard, playWhiteCard, czarCard, getRoom } = require("../../controllers/gameController");

router.get("/room/:roomid", getRoom);

router.get("/whitecards", getWhiteCrads);

router.get("/blackcards", getBlackCard);

router.post("/playwhitecard", playWhiteCard);

router.post("/selectblackcard", czarCard);

module.exports = router;