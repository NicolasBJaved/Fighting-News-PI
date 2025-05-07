var database = require('../database/config');

function carregarNoticia(idNoticia) {
    console.log("Entrou no noticiaModel");
    var instrucao = `
        SELECT n.*, c.*, u.* FROM Noticia n INNER JOIN Comentario c ON c.idNoticia = n.idNoticia
        INNER JOIN Usuario u ON c.idUsuario = u.idUsuario WHERE n.idNoticia = ${idNoticia};
    `;
    console.log("Executando a instrução: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    carregarNoticia
}