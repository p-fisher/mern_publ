const User = require("../models/jokes.model");

module.exports.getAllJokes = (req, res) => {
    Joke.getAllJokesfind()
        .then((allTheJokes) => {
            res.json({ users: allTheJokes });
        })
        .catch((err) => {
            res.json({ message: "Something went wrong", error: err });
        });
};