var noticiaModel = require('../models/noticiaModel');

function carregarMaisCurtidas(req, res) {
    var idUsuario = req.body.idUsuarioServer;

    noticiaModel.carregarMaisCurtidas(idUsuario).then(function (resultado) {
        console.log("Resultado: ", resultado);
        res.json(resultado);
    });
}

function carregarUltimasNoticias(req, res) {
    var idUsuario = req.body.idUsuarioServer;

    noticiaModel.carregarUltimasNoticias(idUsuario).then(function (resultado) {
        console.log("Resultado: ", resultado);
        res.json(resultado);
    });
}

function verificarLikeDado(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var idNoticia = req.body.idServer;

    noticiaModel.jaDeuLike(idUsuario, idNoticia).then(function (resultado) {
        console.log("Resultado: ", resultado);
        res.json(resultado);
    })
}

function carregarNoticia(req, res) {
    var idNoticia = req.body.idServer;

    noticiaModel.carregarNoticia(idNoticia).then(function (resultado) {
        console.log("Resultado: ", resultado);
        res.json(resultado);
    })
}

function carregarComentarios(req, res) {
    var idNoticia = req.body.idServer;

    noticiaModel.carregarComentarios(idNoticia).then(function (resultado) {
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

function excluirNoticia(req, res){
    var idNoticia = req.body.idServer;

    noticiaModel.excluirNoticia(idNoticia).then(function (resultado) {
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

function deletarComentario(req, res) {
    var idComentario = req.body.idComentarioServer;

    noticiaModel.deletarComentario(idComentario).then(function (resultado) {
        console.log("Resultado: ", resultado);
        res.json(resultado);
    })
}

function publicarNoticia(req, res){
    const imagem = req.file.filename;
    const titulo = req.body.titulo;
    const previa = req.body.previa;
    

    noticiaModel.publicarNoticia(titulo, previa, imagem)
        .then(function (resultado) {
            console.log("Resultado: ", resultado);
            res.json(resultado);
        });
}

function adicionarParagrafos(req, res){
    var idNoticia = req.body.idNoticiaServer; 
    var paragrafos = req.body.paragrafosServer;

    console.log("VALORES PARAGRAFOS: " + paragrafos);

    noticiaModel.adicionarParagrafos(idNoticia, paragrafos);
}

module.exports = {
    carregarMaisCurtidas,
    carregarUltimasNoticias,
    verificarLikeDado,
    carregarNoticia,
    carregarComentarios,
    carregarLikes,
    excluirNoticia,
    jaDeuLike,
    darLike,
    removerLike,
    comentar,
    deletarComentario,
    publicarNoticia,
    adicionarParagrafos
};