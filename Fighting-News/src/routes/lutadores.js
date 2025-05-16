var express = require("express");
var router = express.Router();

var lutadoresController = require("../controllers/lutadoresController");

router.get("/maisHypados", function (req, res) {
    console.log("Entrou na rota /maisHypados");
    lutadoresController.maisHypados(req, res);
});

module.exports = router;