const mongoose = require("mongoose");

const jokeSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
});

const Joke = mongoose.model("joke", JokeSchema);

module.exports = Joke;