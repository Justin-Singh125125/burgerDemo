const app = require("express").Router();

//import our burger model
const burger = require("../models/burgers");


app.get("/api/burger", function (req, res) {

});

app.post("/api/burger", function (req, res) {

    burger.createOne(req.body, function (results) {
        res.json(results);
    })


});

app.put("/api/burger", function (req, res) {
    burger.updateOne(req.body)
});

module.exports = app;