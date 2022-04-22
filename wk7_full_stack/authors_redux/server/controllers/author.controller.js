const Author = require("../models/author.model");

module.exports = {
    getAllAuthors: (req, res) => {
        Author.find({})
            .then((allAuthors) => res.json(allAuthors))
            .catch((err) => console.log(err));
    },

    getOneAuthor: (req, res) => {
        Author.findOne({ _id: req.params.id })
            .then((oneAuthor) => res.json(oneAuthor))
            .catch((err) => console.log(err));
    },

    addAuthor: (req, res) => {
        console.log("inside create");
        console.log(req.body);
        Author.create(req.body)
            .then((newAuthor) => res.json(newAuthor))
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
        });
    },

    // find the document before we can add in the new info.
    editAuthor: (req, res) => {
        Author.findByIdAndUpdate({ _id: req.params.id }, req.body, {
            new: true, //By default, update fill not return a new document. This is necessary to ensure we respond with the newly updated document.
            runValidators: true, //This ensures validators work on a PUT request.
        })
            .then((editedAuthor) => res.json(editedAuthor))
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
        });
    },

    deleteAuthor: (req, res) => {
        Author.deleteOne({ _id: req.params.id })
            .then((deletedId) => res.json(deletedId))
            .catch((err) => console.log(err));
    },
};
