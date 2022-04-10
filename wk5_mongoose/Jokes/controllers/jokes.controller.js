const Joke = require("../models/jokes.model");

module.exports.getAllJokes = (req, res) => {
    Joke.find()
        .then((allTheJokes) => {
            res.json({ jokes: allTheJokes });
        })
        .catch((err) => {
            res.json({ message: "Something went wrong", error: err });
        });
};

// module.exports.getOneJoke = (req, res) => {
//     Joke.getOne({ _id: req.params.id })
//         .then((oneJoke) => {
//             res.json({ joke: oneJoke });
//         })
//         .catch((err) => {
//             res.json({ message: "Something went wrong", error: err });
//         });
// };


module.exports.findOneSingleJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then((oneSingleJoke) => {
            res.json({ user: oneSingleJoke });
        })
        .catch((err) => {
            res.json({ message: "Something went wrong", error: err });
        });
};




module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then((newestJoke) => {
            res.json({ joke: newestJoke });
        })
        .catch((err) => {
            res.json({ message: "Something went wrong", error: err });
        });
};

module.exports.updateExistingJoke = (req, res) => {
    Joke.getOneToUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updatedJoke) => {
            res.json({ joke: updatedJoke });
        })
        .catch((err) => {
            res.json({ message: "Something went wrong", error: err });
        });
};

module.exports.deleteOneJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then((result) => {
            res.json({ result: result });
        })
        .catch((err) => {
            res.json({ message: "Something went wrong", error: err });
        });
};

