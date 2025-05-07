var express = require("express");
var router = express.Router();

var noticiasController = require("../controllers/noticiaController");

router.post("/carregarNoticia", function (req, res) {
    console.log("Entrou na rota /carregarNoticia");
    noticiasController.carregarNoticia(req, res);
});

router.post("/comentar", function (req, res) {
    console.log("Entrou na rota /comentar");
    noticiasController.comentar(req, res);
});

module.exports = router;
