const JokeController = require("../controllers/jokes.controller");

module.exports = (app) => {
    app.get("/api/jokes", JokeController.getAllJokes);
//     app.get("/api/users/:id", UserController.findOneSingleUser);
//     app.put("/api/users/:id", UserController.updateExistingUser);
//     app.post("/api/users", UserController.createNewUser);
//     app.delete("/api/users/:id", UserController.deleteAnExistingUser);