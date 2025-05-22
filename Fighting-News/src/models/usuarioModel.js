var database = require("../database/config")

function verificarLogado(idUsuario) {
    console.log("Entrou no usuarioModel");
    var instrucao = `
        SELECT u.idUsuario, u.nome, u.caminhoImagem FROM Usuario u WHERE u.idUsuario = ${idUsuario};
    `;
    console.log("Executando a query: \n" + instrucao);
    return database.executar(instrucao);
}

function carregarInformacoes(idUsuario) {
    console.log("Entrou no usuarioModel");
    var instrucao = `
        SELECT * FROM Usuario WHERE idUsuario = ${idUsuario};
    `;
    console.log("Executando a query: \n" + instrucao);
    return database.executar(instrucao);
}

function mudarFotoDePerfil(imagem, idUsuario) {
    console.log("Entrou no usuarioModel");
    var instrucao = `
        UPDATE Usuario SET caminhoImagem = './imgs/perfilUsuario/${imagem}' WHERE idUsuario = ${idUsuario};
    `;
    console.log("Executando a query: \n" + instrucao);
    return database.executar(instrucao);
}

function mudarNome(novoNome, idUsuario) {
    console.log("Entrou no usuarioModel");
    var instrucao = `
        UPDATE Usuario SET nome = '${novoNome}' WHERE idUsuario = ${idUsuario};
    `;
    console.log("Executando a query: \n" + instrucao);
    return database.executar(instrucao);
}

function mudarEmail(novoEmail, idUsuario){
    console.log("Entrou no usuarioModel");
    var instrucao = `
        UPDATE Usuario SET email = '${novoEmail}' WHERE idUsuario = ${idUsuario};
    `;
    console.log("Executando a query: \n" + instrucao);
    return database.executar(instrucao);
}

function mudarSenha(novaSenha, idUsuario){
    console.log("Entrou no usuarioModel");
    var instrucao = `
        UPDATE Usuario SET senha = '${novaSenha}' WHERE idUsuario = ${idUsuario};
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

function verificarAdmin(idUsuario) {
    console.log("Entrou no verificarAdmin");
    var instrucao = `
        SELECT * FROM Usuario WHERE idUsuario = ${idUsuario} AND admin = 1;
    `;
    console.log("Executando a query: \n" + instrucao);
    return database.executar(instrucao);
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