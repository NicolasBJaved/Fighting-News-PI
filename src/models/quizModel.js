var database = require('../database/config');

function salvarResultado(idUsuario, idQuiz, acertos) {
    console.log("Entrou no quizModel");
    var instrucao = `
        INSERT INTO ResultadoQuiz (idUsuario, idQuiz, acertos) VALUES (${idUsuario}, ${idQuiz}, ${acertos});
    `;
    console.log("Executando a query: \n" + instrucao);
    return database.executar(instrucao);
}

function salvarRespostasPerguntas(idUsuario, acertosErros, perguntas){
    console.log("Entrou no quizModel");
    for(var i = 0; i < acertosErros.length; i++){
        var instrucao = `
            INSERT INTO RespostaPergunta (idPergunta, idUsuario, acerto) VALUES 
            (${perguntas[i].idPergunta}, ${idUsuario}, ${acertosErros[i]});
        `;
        database.executar(instrucao);
        console.log("Executando a query: \n" + instrucao);
    }
    return ;
}

function carregarQuizAtual() { 
    console.log("Entrou no quizModel");
    var instrucao = `
        SELECT * FROM Quiz WHERE NOW() > dataInicio AND NOW() < dataFim;
    `;
    console.log("Executando a query: \n" + instrucao);
    return database.executar(instrucao);
}

function carregarPerguntasQuiz(idQuiz){
    console.log("Entrou no quizModel");
    var instrucao = `
        SELECT * FROM PerguntaQuiz WHERE idQuiz = ${idQuiz};
    `;
    console.log("Executando a query: \n" + instrucao);
    return database.executar(instrucao);
}

function carregarAcertosErrosQuiz(perguntas){
    var instrucao = `
        SELECT
        COUNT(*) totalRespostas,
        SUM(CASE WHEN acerto = 1 THEN 1 ELSE 0 END) totalAcertos,
        SUM(CASE WHEN acerto = 0 THEN 1 ELSE 0 END) totalErros
        FROM RespostaPergunta
        WHERE idPergunta IN (${perguntas})
        GROUP BY idPergunta;
    `;
    
    return database.executar(instrucao);
}  

function verificarUsuarioJaFezQuiz(idUsuario, idQuiz) {
    console.log("Entrou no quizModel");
    var instrucao = `
        SELECT * FROM ResultadoQuiz WHERE idUsuario = ${idUsuario} AND idQuiz = ${idQuiz};
    `;
    console.log("Executando a query: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    salvarResultado,
    salvarRespostasPerguntas,
    carregarQuizAtual,
    carregarPerguntasQuiz,
    carregarAcertosErrosQuiz,
    verificarUsuarioJaFezQuiz
}