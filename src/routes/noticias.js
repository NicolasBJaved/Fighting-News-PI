var express = require("express");
var upload = require('../config/configUploadImagemNoticia'); // ARQUIVO COM A CONFIGURAÇÃO DO UPLOAD
var router = express.Router();

var noticiasController = require("../controllers/noticiaController");

router.get("/carregarMaisCurtidas", function (req, res) {
    console.log("Entrou na rota /carregarMaisCurtidas");
    noticiasController.carregarMaisCurtidas(req, res);
}
);

router.get("/carregarUltimasNoticias", function (req, res) {
    console.log("Entrou na rota /carregarUltimasNoticias");
    noticiasController.carregarUltimasNoticias(req, res);
});

router.post("/verificarLikeDado", function (req, res) {
    console.log("Entrou na rota /verificarLikeDado");
    noticiasController.verificarLikeDado(req, res);
}
);

router.post("/carregarNoticia", function (req, res) {
    console.log("Entrou na rota /carregarNoticia");
    noticiasController.carregarNoticia(req, res);
});

router.post("/carregarComentarios", function (req, res) {
    console.log("Entrou na rota /carregarComentarios");
    noticiasController.carregarComentarios(req, res);
});

router.post("/carregarLikes", function(req, res){
    console.log("Entrou na rota /carregarLikes");
    noticiasController.carregarLikes(req, res);
})

router.post("/jaDeuLike", function (req, res) {
    console.log("Entrou na rota /jaDeuLike");
    noticiasController.jaDeuLike(req, res);
});

router.post("/excluirNoticia", function(req, res){
    console.log("Entrou na rota /excluirNoticia");
    noticiasController.excluirNoticia(req, res);
})

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

router.post("/publicarNoticia", upload.single('foto'), function (req, res) {
    console.log("Entrou na rota /publicarNoticia");
    noticiasController.publicarNoticia(req, res);
});

router.post("/adicionarParagrafos", function(req, res){
    console.log("Entrou na rota /adicionarParagrafos");
    noticiasController.adicionarParagrafos(req, res);
})

module.exports = router;
