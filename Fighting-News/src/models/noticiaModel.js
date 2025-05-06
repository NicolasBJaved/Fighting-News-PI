var database = require('../database/config');

function carregarNoticia(idNoticia) {
    console.log("Entrou no noticiaModel");
    var instrucao = `
        SELECT * FROM Noticia WHERE idNoticia = ${idNoticia};
    `;
    console.log("Executando a instrução: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    carregarNoticia
}