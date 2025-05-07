var database = require('../database/config');

function carregarNoticia(idNoticia) {
    console.log("Entrou no noticiaModel");
    var instrucao = `
        SELECT n.*, c.*, u.* FROM Noticia n INNER JOIN Comentario c ON c.idNoticia = n.idNoticia
        INNER JOIN Usuario u ON c.idUsuario = u.idUsuario WHERE n.idNoticia = ${idNoticia};
    `;
    console.log("Executando a query: \n" + instrucao);
    return database.executar(instrucao);
}

function comentar(idUsuario, comentario, idNoticia) {
    console.log("Entrou no noticiaModel");
    var instrucao = `
        INSERT INTO Comentario (idUsuario, idNoticia, comentario, data) VALUES (${idUsuario}, ${idNoticia} ,
        '${comentario}', NOW());
    `;
    console.log("Executando a query: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    carregarNoticia,
    comentar
}