const cah = require("../../cah.json");

export function getWhiteCrads() {
    let white = cah[0].white;
    let array = [];
    let ind = new Set();
    let random = Math.min(10, white.length);
    while (array.length < random) {
        const index = Math.floor(Math.random() * white.length);
        if (!ind.has(index)) {
            array.push(white[index]);
            ind.add(index);   
        }
    }
     return array;
}

export function getBlackCard() {
    let black = cah[0].black;
    const random = Math.floor(Math.random() * black.length);
    let result = black[random];
    return result.text;
}

export function playWhiteCard(card) {
    cardPlayed = card;
}