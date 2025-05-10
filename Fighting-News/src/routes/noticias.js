var express = require("express");
var router = express.Router();

var noticiasController = require("../controllers/noticiaController");

router.post("/carregarNoticia", function (req, res) {
    console.log("Entrou na rota /carregarNoticia");
    noticiasController.carregarNoticia(req, res);
});

router.post("/carregarLikes", function(req, res){
    console.log("Entrou na rota /carregarLikes");
    noticiasController.carregarLikes(req, res);
})

router.post("/jaDeuLike", function (req, res) {
    console.log("Entrou na rota /jaDeuLike");
    noticiasController.jaDeuLike(req, res);
});


router.post("/darLike", function (req, res) {
    console.log("Entrou na rota /darLike");
    noticiasController.darLike(req, res);
});

router.post("/removerLike", function (req, res) {
    console.log("Entrou na rota /removerLike");
    noticiasController.removerLike(req, res);
});

router.post("/comentar", function (req, res) {
    console.log("Entrou na rota /comentar");
    noticiasController.comentar(req, res);
});

router.post("/deletarComentario", function (req, res) {
    console.log("Entrou na rota /deletarComentario");
    noticiasController.deletarComentario(req, res);
})

module.exports = router;
