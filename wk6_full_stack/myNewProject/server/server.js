const express = require("express");
const cors = require("cors"); /* This is new */
const app = express();
app.use(cors()); /* This is new */
/* This is a short-hand notation we use: */
app.use(express.json()); /* This is new and allows JSON Objects to be posted */
app.use(
    express.urlencoded({ extended: true })
); /* This is new and allows JSON Objects with strings and arrays*/
require("./config/mongoose.config"); /* This is new */
app.listen(8000, () => {
    console.log("Listening at Port 8000");
});
