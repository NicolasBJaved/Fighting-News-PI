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
module.exports = {
    salvarResultado,
    carregarQuizAtual
}