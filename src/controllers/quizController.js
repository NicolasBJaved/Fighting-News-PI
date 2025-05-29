var quizModel = require('../models/quizModel');

function salvarResultado(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var idQuiz = req.body.idQuizServer;
    var acertos = req.body.acertosServer;


    quizModel.salvarResultado(idUsuario, idQuiz, acertos)
        .then(function (resultado) { 
            res.status(200).json(resultado);
        });
}

function carregarQuizAtual(req, res){
    quizModel.carregarQuizAtual()
        .then(function (resultado) {
            res.status(200).json(resultado);
        });
}

function carregarPerguntasQuiz(req, res){

    var idQuiz = req.body.idQuizServer;

    quizModel.carregarPerguntasQuiz(idQuiz)
        .then(function (resultado) {
            res.status(200).json(resultado);
        });
}

function verificarUsuarioJaFezQuiz(req, res){
    var idUsuario = req.body.idUsuarioServer;
    var idQuiz = req.body.idQuizServer;

    quizModel.verificarUsuarioJaFezQuiz(idUsuario, idQuiz)
        .then(function (resultado) {
            res.status(200).json(resultado);
        });
}
module.exports = {
    salvarResultado,
    carregarQuizAtual,
    carregarPerguntasQuiz,
    verificarUsuarioJaFezQuiz
}