const AuthorController = require("../controllers/author.controller");

module.exports = (app) => {
    app.post("/api/authors", AuthorController.addAuthor);
    app.get("/api/authors", AuthorController.getAllAuthors);
    app.get("/api/authors/:id", AuthorController.getOneAuthor);
    app.put("/api/authors/:id", AuthorController.editAuthor); 
    app.delete("/api/authors/:id", AuthorController.deleteAuthor); // okay because diff verb than editAuthor, above
};
