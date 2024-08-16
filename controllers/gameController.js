const cah = require("../cah.json");

exports.getWhiteCrads = async (req, res) => {
    try {
        const white = cah[0].white;
        let array = [];
        let ind = new Set();
        const random = Math.min(10, white.length);
        while (array.length < random) {
            const index = Math.floor(Math.random() * white.length);
            if (!ind.has(index)) {
            array.push(white[index]);
            ind.add(index);   
            }
        }
        res.status(200).send(array);
    } catch (error) {
        res.status(500).json({ "error": "Something went wrong try again later" });
        console.log(error);
    }
}

exports.getBlackCard = async (req, res) =>  {
    try {
        const black = cah[0].black;
        const random = Math.floor(Math.random() * black.length);
        const result = black[random];
        res.status(200).json({ "card": result.text });
    } catch (error) {

    }
}

exports.playWhiteCard = async (req, res) => {
    try {
        const { username, card } = req.body;

        await User.updateOne({
            username: username
        }, {
            $set: {
                card: card
            },
        });

        res.status(200).json({ "message": `$username selected ${card}`});
    } catch (error) {
        res.status(500).json({ "error": "Something went wrong try again later" });
        console.log(error);
    }
}

exports.czarCard = async (req, res) => {
    try {
        const { czar, card } = req.body;

        await Game.updateOne({
            czar: czar
        }, {
            $set: {
                czarCard: card
            },
        });

        const winner = await User.updateOne({
            card: card
        }, {
            $inc: {
                points: 1
            },
        });

        if (winner.points == 10) {
            await Game.deleteOne({
                _id: winner.room
            });

            res.status(200).json({ "message": `${winner.username} won this match`});
        }

        res.status(200).json({ "message": `${winner.username} won`});
    } catch (error) {
        res.status(500).json({ "error": "Something went wrong try again later" });
        console.log(error);
    }
}