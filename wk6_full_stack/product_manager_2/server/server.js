//Note: the order we write these lines in matter. Stick to this order for proper functionality.

const express = require("express"); //express is a powerful framework for our node server.
const cors = require("cors");
const app = express(); //the express method allows us to create an express application

app.use(express.json()); //middleware that allows us to read JSON objects sent in the client's request
app.use(express.urlencoded({ extended: true })); //middleware that allows us to read JSON objects with strings and arrays in the client's request

app.use(
    cors({
        origin: "http://localhost:3000",
    })
);


// make available to express method
require("./config/mongoose.config");

// reference routes by express method being added as an argument.

require("./routes/product.routes")(app);

app.listen(8000, () => console.log("Listening on Port 8000"));
