var database = require('../database/config');

function maisHypadas() {

    const data = new Date();
    data.setDate(data.getDate() - 7);

    const dataFormatada = data.toISOString().split('T')[0];

    console.log("Data formatada: " + dataFormatada);

    console.log("Entrou no lutaModel");
    var instrucao = `
            SELECT lutador1.nome nome1, lutador2.nome nome2, card.nome nomeCard, card.data dataLuta,
        categoria.nome nomeCategoria, luta.rounds rounds, luta.valendoCinturao valendoCinturao,
        luta.caminhoImagem caminhoImagem, COUNT(likeNoticia.idUsuario) totalLikes
        FROM 
        Luta luta INNER JOIN Lutador lutador1 ON luta.idLutador1 = lutador1.idLutador 
        inner join Lutador lutador2 on luta.idLutador2 = lutador2.idLutador 
        inner join Card card on luta.idCard = card.idCard
        inner join Categoria categoria on luta.idCategoria = categoria.idCategoria 
        inner join LutaNoticia lutaNoticia on lutaNoticia.idLuta = luta.idLuta 
        inner join Noticia noticia on lutaNoticia.idNoticia = noticia.idNoticia
        inner join LikeNoticia likeNoticia on likeNoticia.idNoticia = noticia.idNoticia
        WHERE noticia.dataPostagem > '${dataFormatada}'
        GROUP BY lutador1.nome, lutador2.nome, card.nome, card.data, categoria.nome, luta.rounds, luta.valendoCinturao , luta.caminhoImagem
        HAVING COUNT(likeNoticia.idUsuario)
        >
        (SELECT AVG(qtdLikes) 
        FROM (SELECT COUNT(*) as qtdLikes FROM LikeNoticia likeNoticia INNER JOIN Noticia noticia
        ON likeNoticia.idNoticia = noticia.idNoticia WHERE noticia.dataPostagem > '${dataFormatada}'
        GROUP BY likeNoticia.idNoticia) as likesPorNoticia) 
        ORDER BY 
            totalLikes DESC
        LIMIT 4;
        `;
    console.log("Executando a query: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    maisHypadas
}