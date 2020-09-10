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

router.get("/api-tan", function (req, res) {
    res.render("api-tan");
});

router.get("/transport", function (req, res) {
    res.render("transport");
});

router.get("/voiture", function (req, res) {
    res.render("voiture");
});

router.get("/velo", function (req, res) {
    res.render("velo");
});

router.get("/tramway", function (req, res) {
    res.render("tramway");
});

router.get("/api-sncf", function (req, res) {
    res.render("api-sncf");
});
module.exports = router;

