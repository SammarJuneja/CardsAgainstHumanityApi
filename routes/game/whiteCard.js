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