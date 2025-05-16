var database = require('../database/config');

function maisHypados(){
    console.log("Entrou no noticiaModel");

    const data = new Date();
    data.setDate(data.getDate() - 7);

    const dataFormatada = data.toISOString().split('T')[0];

    console.log("Data formatada: " + dataFormatada);

    var instrucao = `
        SELECT lutador.idLutador, lutador.nome nomeLutador, lutador.vitorias vitorias, lutador.derrotas derrotas, lutador.empate empate,
        lutador.nc noContest, categoria.nome nomeCategoria, lutador.caminhoImagem caminhoImagem
        FROM Lutador lutador
        INNER JOIN Categoria categoria ON lutador.idCategoria = categoria.idCategoria
        INNER JOIN LutadorNoticia lutadorNoticia ON lutadorNoticia.idLutador = lutador.idLutador
        INNER JOIN Noticia noticia ON lutadorNoticia.idNoticia = noticia.idNoticia
        INNER JOIN LikeNoticia likeNoticia ON likeNoticia.idNoticia = noticia.idNoticia
        WHERE noticia.dataPostagem > '${dataFormatada}'
        GROUP BY lutador.idLutador, lutador.nome, lutador.vitorias, lutador.derrotas, lutador.empate,
        lutador.nc, categoria.nome, lutador.caminhoImagem
        HAVING COUNT(likeNoticia.idUsuario)
            >
            (SELECT AVG(qtdLikes) 
            FROM (SELECT COUNT(*) as qtdLikes FROM LikeNoticia likeNoticia INNER JOIN Noticia noticia
            ON likeNoticia.idNoticia = noticia.idNoticia WHERE noticia.dataPostagem > '${dataFormatada}'
            GROUP BY likeNoticia.idNoticia) as likesPorNoticia) ;
    `;

    console.log("Executando a query: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    maisHypados
};