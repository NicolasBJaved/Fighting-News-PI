var database = require('../database/config');

function carregarMaisCurtidas(){
    console.log("Entrou no noticiaModel");
    var instrucao = `
        SELECT n.idNoticia, n.caminhoImagem, n.tituloNoticia, COUNT(likeNoticia.idNoticia) likes FROM Noticia n
        INNER JOIN LikeNoticia likeNoticia
        ON likeNoticia.idNoticia = n.idNoticia
        GROUP BY n.idNoticia, n.caminhoImagem, n.tituloNoticia
        ORDER BY likes DESC LIMIT 3;
        `;
    console.log("Executando a query: \n" + instrucao);
    return database.executar(instrucao);
}

function carregarUltimasNoticias(){
    console.log("Entrou no noticiaModel");
    var instrucao = `
        SELECT n.idNoticia, n.caminhoImagem, n.dataPostagem, n.tituloNoticia, n.previaNoticia FROM Noticia n ORDER BY n.dataPostagem DESC LIMIT 9;    `;
    console.log("Executando a query: \n" + instrucao);
    return database.executar(instrucao);
}

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

function excluirNoticia(idNoticia){
    console.log("Entrou no noticiaModel");
    var instrucao = `
        DELETE FROM Noticia WHERE idNoticia = ${idNoticia};
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

function publicarNoticia(titulo, previa, caminhoImagem) {
    console.log("Entrou no noticiaModel");
    var instrucao = `
        INSERT INTO Noticia (tituloNoticia, dataPostagem, previaNoticia, caminhoImagem) VALUES ('${titulo}',
        CURDATE() ,'${previa}', './imgs/imagens-noticias/${caminhoImagem}');
    `;
    console.log("Executando a query: \n" + instrucao);
    return database.executar(instrucao);
}

function adicionarParagrafos(idNoticia, paragrafos){
    console.log("Entrou no noticiaModel");
    var ordem = 1;
    for(var i = 0; i < paragrafos.length; i++){
        var instrucao = `
        INSERT INTO ParagrafoNoticia(idNoticia, conteudo, ordem) VALUES (${idNoticia}, '${paragrafos[i]}', ${ordem})
        `;
        ordem++;
        database.executar(instrucao);
        console.log("Executando a query: \n" + instrucao);
    }
    
    return ;
}

module.exports = {
    carregarMaisCurtidas,
    carregarUltimasNoticias,
    carregarNoticia,
    carregarComentarios,
    carregarLikes,
    jaDeuLike,
    excluirNoticia,
    removerLike,
    comentar,
    deletarComentario,
    darLike,
    publicarNoticia,
    adicionarParagrafos
}