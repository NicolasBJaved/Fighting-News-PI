var express = require("express");
var upload = require('../config/configUploadImagemPerfil'); // ARQUIVO COM A CONFIGURAÇÃO DO UPLOAD
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.post("/verificarLogado", function (req, res) {
    console.log("Entrou na rota /verificarLogado");
    usuarioController.verificarLogado(req, res);
}
);

router.post("/carregarInformacoes", function (req, res) {
    console.log("Entrou na rota /carregarInformacoes");
    usuarioController.carregarInformacoes(req, res);
});

router.post("/mudarFotoDePerfil", upload.single('foto'), function (req, res) {
    console.log("Entrou na rota /mudarFotoDePerfil");
    usuarioController.mudarFotoDePerfil(req, res);
}
);

router.post("/mudarNome", function(req, res){
    console.log("Entrou na rota /mudarNome");
    usuarioController.mudarNome(req, res);
});

router.post("/mudarEmail", function(req, res){
    console.log("Entrou na rota /mudarEmail");
    usuarioController.mudarEmail(req, res);
})

router.post("/mudarSenha", function(req, res){
    console.log("Entrou na rota /mudarSenha");
    usuarioController.mudarSenha(req, res);
})

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

router.post("/verificarAdmin", function(req, res){
    console.log("Entrou na rota /verificarAdmin");
    usuarioController.verificarAdmin(req, res);
});

module.exports = router; 