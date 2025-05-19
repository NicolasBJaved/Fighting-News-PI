var database = require("../database/config")

function carregarInformacoes(idUsuario) {
    console.log("Entrou no usuarioModel");
    var instrucao = `
        SELECT * FROM Usuario WHERE idUsuario = ${idUsuario};
    `;
    console.log("Executando a query: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(nome, email, senha) {
    console.log("Entrou no usuarioModel");
    var instrucao = `
        INSERT INTO Usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
    console.log("Executando a query: \n" + instrucao);
    return database.executar(instrucao);
}

function autenticar(email, senha) {
    console.log("Entrou no autenticar");
    var instrucao = `
        SELECT * FROM Usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a query: \n" + instrucao);
    return database.executar(instrucao);
}

function listarTop10() {
    console.log("Entrou no listarTop10");
    var instrucao = `
        SELECT usuario.caminhoImagem, usuario.nome, resultadoQuiz.acertos  FROM ResultadoQuiz resultadoQuiz 
        INNER JOIN Usuario usuario ON resultadoQuiz.idUsuario = usuario.idUsuario
        ORDER BY acertos DESC LIMIT 10;
    `;
    console.log("Executando a query: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    carregarInformacoes,
    cadastrar,
    autenticar,
    listarTop10
}