//to get server functuanlity
const express = require("express");

const burgerController = require("./controllers/burgers_controller");

//set the port
const PORT = process.env.PORT || 8000;

//store an express server in an app
const app = express();

//overhead middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//controller routes
app.use(burgerController);

//make our app listen for requests
app.listen(PORT, function () {
    console.log("APP LISTENING ON PORT: ", PORT);
})
