var express = require("express");
var router = express.Router();

var lutadoresController = require("../controllers/lutadoresController");

router.get("/maisHypados", function (req, res) {
    console.log("Entrou na rota /maisHypados");
    lutadoresController.maisHypados(req, res);
});

router.get("/carregarlutadores", function(req, res) {
    console.log("Entrou na rota /carregarlutadores");
    lutadoresController.carregarlutadores(req, res);
});

router.post("/adicionarLutadores", function(req, res){
    console.log("entrou na rota /adicionarLutadores")
    lutadoresController.adicionarLutadores(req, res);
});

module.exports = router;