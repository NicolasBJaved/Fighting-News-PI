var database = require('../database/config');

function carregarNoticia(idNoticia) {
    console.log("Entrou no noticiaModel");
    var instrucao = `
        SELECT n.* FROM Noticia n WHERE n.idNoticia = ${idNoticia};
    `;
    console.log("Executando a query: \n" + instrucao);
    return database.executar(instrucao);
}

function carregarComentarios(idNoticia) {
    console.log("Entrou no noticiaModel");
    var instrucao = `
        SELECT c.*, u.* FROM Comentario c INNER JOIN Usuario u ON c.idUsuario = u.idUsuario WHERE c.idNoticia = ${idNoticia};
    `;
    console.log("Executando a query: \n" + instrucao);
    return database.executar(instrucao);
}

function carregarLikes(idNoticia){
    console.log("Entrou no noticiaModel");
    var instrucao = `
        SELECT COUNT(*) AS qtdLikes FROM likeNoticia WHERE idNoticia = ${idNoticia};
    `;
    console.log("Executando a query: \n" + instrucao);
    return database.executar(instrucao);
}

function jaDeuLike(idUsuario, idNoticia) {
    console.log("Entrou no noticiaModel");
    var instrucao = `
        SELECT COUNT(*) AS jaDeuLike FROM likeNoticia WHERE idUsuario = ${idUsuario} AND idNoticia = ${idNoticia};
    `;
    console.log("Executando a query: \n" + instrucao);
    return database.executar(instrucao);
}

function darLike(idUsuario, idNoticia) {
    console.log("Entrou no noticiaModel");
    var instrucao = `
        INSERT INTO likeNoticia (idUsuario, idNoticia) VALUES (${idUsuario}, ${idNoticia});
    `;
    console.log("Executando a query: \n" + instrucao);
    return database.executar(instrucao);
}

function removerLike(idUsuario, idNoticia) {
    console.log("Entrou no noticiaModel");
    var instrucao = `
        DELETE FROM likeNoticia WHERE idUsuario = ${idUsuario} AND idNoticia = ${idNoticia};
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

function deletarComentario(idComentario) {
    console.log("Entrou no noticiaModel");
    var instrucao = `
        DELETE FROM Comentario WHERE idComentario = ${idComentario};
    `;
    console.log("Executando a query: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    carregarNoticia,
    carregarComentarios,
    carregarLikes,
    jaDeuLike,
    removerLike,
    comentar,
    deletarComentario,
    darLike
}