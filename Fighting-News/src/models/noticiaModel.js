var database = require('../database/config');

function carregarNoticia(idNoticia) {
    console.log("Entrou no noticiaModel");
    var instrucao = `
         SELECT n.*, p.* FROM Noticia n INNER JOIN ParagrafoNoticia p ON p.idNoticia =
          n.idNoticia WHERE n.idNoticia = ${idNoticia} ORDER BY ordem;
    `;
    console.log("Executando a query: \n" + instrucao);
    return database.executar(instrucao);
}

function carregarComentarios(idNoticia) {
    console.log("Entrou no noticiaModel");
    var instrucao = `
        SELECT c.*, u.* FROM Comentario c INNER JOIN Usuario u ON c.idUsuario = u.idUsuario WHERE c.idNoticia = ${idNoticia}
        ORDER BY c.data DESC;
    `;
    console.log("Executando a query: \n" + instrucao);
    return database.executar(instrucao);
}

function carregarLikes(idNoticia){
    console.log("Entrou no noticiaModel");
    var instrucao = `
        SELECT COUNT(*) AS qtdLikes FROM LikeNoticia WHERE idNoticia = ${idNoticia};
    `;
    console.log("Executando a query: \n" + instrucao);
    return database.executar(instrucao);
}

function jaDeuLike(idUsuario, idNoticia) {
    console.log("Entrou no noticiaModel");
    var instrucao = `
        SELECT COUNT(*) AS jaDeuLike FROM LikeNoticia WHERE idUsuario = ${idUsuario} AND idNoticia = ${idNoticia};
    `;
    console.log("Executando a query: \n" + instrucao);
    return database.executar(instrucao);
}

function darLike(idUsuario, idNoticia) {
    console.log("Entrou no noticiaModel");
    var instrucao = `
        INSERT INTO LikeNoticia (idUsuario, idNoticia) VALUES (${idUsuario}, ${idNoticia});
    `;
    console.log("Executando a query: \n" + instrucao);
    return database.executar(instrucao);
}

function removerLike(idUsuario, idNoticia) {
    console.log("Entrou no noticiaModel");
    var instrucao = `
        DELETE FROM LikeNoticia WHERE idUsuario = ${idUsuario} AND idNoticia = ${idNoticia};
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