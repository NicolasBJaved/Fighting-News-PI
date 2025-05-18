var database = require('../database/config');

function salvarResultado(idUsuario, idQuiz, acertos) {
    console.log("Entrou no quizModel");
    var instrucao = `
        INSERT INTO ResultadoQuiz (idUsuario, idQuiz, acertos) VALUES (${idUsuario}, ${idQuiz}, ${acertos});
    `;
    console.log("Executando a query: \n" + instrucao);
    return database.executar(instrucao);
}

function carregarQuizAtual() {
    console.log("Entrou no quizModel");
    var instrucao = `
        SELECT * FROM Quiz WHERE NOW() > dataInicio AND NOW() < dataFim;
    `;
    console.log("Executando a query: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    salvarResultado,
    carregarQuizAtual
}