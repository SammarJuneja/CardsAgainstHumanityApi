const { Router } = require("express");
const validator = require("express-validotor");
const router = Router();
const { getWhiteCrads, getBlackCard, playWhiteCard, selectBlackCard } = require("../../controllers/gameController");

router.get("/whitecards", getWhiteCrads);

router.get("/blackcards", getBlackCard);

router.post("/playwhitecard", playWhiteCard);

router.post("/selectblackcard", selectBlackCard);

module.exports = router;