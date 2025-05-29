var express = require("express");
var router = express.Router();

var lutasController = require("../controllers/lutaController");

router.get("/maisHypadas", function (req, res) {
    console.log("Entrou na rota /maisHypadas");
    lutasController.maisHypadas(req, res);
}
);

router.get("/carregarLutas", function(req, res){
    console.log("entrou na rota /carregarLutas")
    lutasController.carregarLutas(req, res);
});

router.post("/adicionarLutas", function(req, res){
    console.log("entrou na rota /adicionarLutas")
    lutasController.adicionarLutas(req, res);
});

module.exports = router;