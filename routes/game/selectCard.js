const cah = require("../../cah.json");

function playWhiteCard(card) {
    cardPlayed = card;
    socket.emit("playcard", { gameRoom, card });
}