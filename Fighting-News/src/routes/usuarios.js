var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.post("/cadastrar", function (req, res) {
    console.log("Entrou na rota /cadastrar");
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    console.log("Entrou na rota /autenticar");
    usuarioController.autenticar(req, res);
})

router.get("/top10", function (req, res) {
    console.log("Entrou na rota /top10");
    usuarioController.listarTop10(req, res);
});

module.exports = router; 