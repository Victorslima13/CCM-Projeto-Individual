var express = require("express");
var router = express.Router();

var dashgraphController = require("../controllers/dashgraphController");

router.get("/dashtake", function (req, res) {
    dashgraphController.dashtake(req, res);
})

router.get("/dashbargraph/:universo", function (req, res) {
    dashgraphController.dashbargraph(req, res);
})

router.get("/takecatalog", function (req, res) {
    dashgraphController.takecatalog(req, res);
})

module.exports = router;