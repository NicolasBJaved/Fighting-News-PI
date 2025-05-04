var database = require("../database/config")

function cadastrar(nome, email, senha) {
    console.log("Entrou no usuarioModel");
    var instrucao = `
        INSERT INTO Usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução: \n" + instrucao);
    return database.executar(instrucao);
}

function autenticar(email, senha) {
    console.log("Entrou no autenticar");
    var instrucao = `
        SELECT * FROM Usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    autenticar
}