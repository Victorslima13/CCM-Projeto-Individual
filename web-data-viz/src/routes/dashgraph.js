var express = require("express");
var router = express.Router();

var dashgraphController = require("../controllers/dashgraphController");

router.get("/atualizardados", function (req, res) {
    dashgraphController.atualizardados(req, res);
})