var usuarioModel = require('../models/usuarioModel');

function verificarLogado(req, res) {
    console.log("Entrou no verificarLogado");
    var idUsuario = req.body.idUsuarioServer;

    console.log("ID do usuário: ", idUsuario);
    
    usuarioModel.verificarLogado(idUsuario)
        .then(function (resultado) {
            console.log("Resultado: ", resultado);
            res.json(resultado);
        });
}

function carregarInformacoes(req, res) {
    console.log("Entrou no carregarInformacoes");
    var idUsuario = req.body.idUsuarioServer;

    console.log("ID do usuário: ", idUsuario);
    
    usuarioModel.carregarInformacoes(idUsuario)
        .then(function (resultado) {
            console.log("Resultado: ", resultado);
            res.json(resultado);
        });
    
}

function mudarFotoDePerfil(req, res){
    var imagem = req.file.filename;
    var idUsuario = req.body.id;
    console.log("ID do usuário mudar foto de perfil: ", idUsuario);

    usuarioModel.mudarFotoDePerfil(imagem, idUsuario)
        .then(function (resultado) {
            console.log("Resultado: ", resultado);
            res.json(resultado);
        });
}

function mudarNome(req, res){
    var novoNome = req.body.nomeServer;
    var idUsuario = req.body.idUsuarioServer;

    usuarioModel.mudarNome(novoNome, idUsuario)
        .then(function (resultado) {
            console.log("Resultado: ", resultado);
            res.json(resultado);
        });
}

function mudarEmail(req, res){
    var novoEmail = req.body.emailServer;
    var idUsuario = req.body.idUsuarioServer;

    usuarioModel.mudarEmail(novoEmail, idUsuario)
        .then(function (resultado) {
            console.log("Resultado: ", resultado);
            res.json(resultado);
        });
}

function mudarSenha(req, res){
    var novaSenha = req.body.senhaServer;
    var idUsuario = req.body.idUsuarioServer;

    usuarioModel.mudarSenha(novaSenha, idUsuario)
        .then(function (resultado) {
            console.log("Resultado: ", resultado);
            res.json(resultado);
        });
}

function cadastrar(req, res) {
    console.log("Entrou no usuarioController");
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    console.log("Nome: ", nome);
    console.log("Email: ", email);
    console.log("Senha: ", senha);

    if (nome == undefined) {
        console.log("Nome está undefined");
        res.status(400).send("Seu nome está undefined");
    } else if (email == undefined) {
        console.log("Email está undefined");
        res.status(400).send("Seu email está undefined");
    } else if (senha == undefined) {
        console.log("Senha está undefined");
        res.status(400).send("Sua senha está undefined");
    } else {
        usuarioModel.cadastrar(nome, email, senha)
            .then(function (resultado) {
                console.log("Resultado: ", resultado);
                res.json(resultado);
            });
    }
}

function autenticar(req, res) {
    console.log("Entrou no autenticar");
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    console.log("Email: ", email);
    console.log("Senha: ", senha);

    if (email == undefined) {
        console.log("Email está undefined");
        res.status(400).send("Seu email está undefined");
    } else if (senha == undefined) {
        console.log("Senha está undefined");
        res.status(400).send("Sua senha está undefined");
    } else {
        usuarioModel.autenticar(email, senha)
            .then(function (resultado) {
                console.log("Resultado: ", resultado);
                res.json(resultado);
            });
    }
}

function listarTop10(req, res) {
    console.log("Entrou no listarTop10");
    usuarioModel.listarTop10()
        .then(function (resultado) {
            console.log("Resultado: ", resultado);
            res.json(resultado);
        });
}

function verificarAdmin(req, res){
    console.log("Entrou no verificarAdmin");
    var idUsuario = req.body.idUsuarioServer;
    usuarioModel.verificarAdmin(idUsuario)
        .then(function(resultado){
            console.log("Resultado: ", resultado);
            res.json(resultado);
        });
}

module.exports = {
    verificarLogado,
    carregarInformacoes,
    mudarFotoDePerfil,
    mudarNome,
    mudarEmail,
    mudarSenha,
    cadastrar,
    autenticar,
    listarTop10,
    verificarAdmin
}