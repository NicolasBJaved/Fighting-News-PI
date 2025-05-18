var usuarioModel = require('../models/usuarioModel');

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

module.exports = {
    cadastrar,
    autenticar,
    listarTop10
}