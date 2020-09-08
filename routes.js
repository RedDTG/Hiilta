var express = require("express");


var router = express.Router();

router.get("/", function (req, res) {
    //console.log("Hello, I'm on the start page here");
    res.render("index");
});

router.get("/loading", function (req, res) {
    res.render("loading");
});

router.get("/welcome", function (req, res) {
    res.render("welcome");
});

router.get("/subscribe", function (req, res) {
    res.render("subscribe");
});

router.get("/transport", function (req, res) {
    res.render("transport");
});

module.exports = router;

