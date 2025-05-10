var noticiaModel = require('../models/noticiaModel');

function carregarNoticia(req, res) {
    var idNoticia = req.body.idServer;

    noticiaModel.carregarNoticia(idNoticia).then(function (resultado) {
        console.log("Resultado: ", resultado);
        res.json(resultado);
    })
}

function jaDeuLike(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var idNoticia = req.body.idNoticiaServer;

    noticiaModel.jaDeuLike(idUsuario, idNoticia).then(function (resultado) {
        console.log("Resultado: ", resultado);
        res.json(resultado);
    })
}

function carregarLikes(req, res){
    var idNoticia = req.body.idServer;

    noticiaModel.carregarLikes(idNoticia).then(function (resultado){
        console.log("Resultado: ", resultado);
        res.json(resultado);
    })
}

function darLike(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var idNoticia = req.body.idNoticiaServer;

    noticiaModel.darLike(idUsuario, idNoticia).then(function (resultado) {
        console.log("Resultado: ", resultado);
        res.json(resultado);
    })
}

function removerLike(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var idNoticia = req.body.idNoticiaServer;

    noticiaModel.removerLike(idUsuario, idNoticia).then(function (resultado) {
        console.log("Resultado: ", resultado);
        res.json(resultado);
    })
}

function comentar(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var comentario = req.body.comentarioServer;
    var idNoticia = req.body.idNoticiaServer;

    noticiaModel.comentar(idUsuario, comentario, idNoticia).then(function (resultado) {
        console.log("Resultado: ", resultado);
        res.json(resultado);
    })
}

module.exports = {
    carregarNoticia,
    carregarLikes,
    jaDeuLike,
    darLike,
    removerLike,
    comentar
};