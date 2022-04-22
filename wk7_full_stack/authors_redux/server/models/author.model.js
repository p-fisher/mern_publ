const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Author name cannot be blank."],
            minlength: [3,"The author's name must be at least 3 characters long."]
        },
    },
    { timestamps: true }
);

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;
