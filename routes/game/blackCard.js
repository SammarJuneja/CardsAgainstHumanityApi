const express = require("express");
const router = express.Router();

const cah = require("../../cah.json");

export function getBlackCard() {
    let black = cah[0].black;
    const random = Math.floor(Math.random() * black.length);
    let result = black[random];
    return result.text;
}