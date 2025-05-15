var database = require('../database/config');

function maisHypadas() {
    console.log("Entrou no noticiaModel");
    var instrucao = `
            SELECT lutador1.nome nome1, lutador2.nome nome2, card.nome nomeCard, card.data dataLuta,
    categoria.nome nomeCategoria, luta.rounds rounds, luta.valendoCinturao valendoCinturao,
    luta.caminhoImagem caminhoImagem
    FROM 
    Luta luta INNER JOIN Lutador lutador1 ON luta.idLutador1 = lutador1.idLutador 
    inner join Lutador lutador2 on luta.idLutador2 = lutador2.idLutador 
    inner join Card card on luta.idCard = card.idCard
    inner join Categoria categoria on luta.idCategoria = categoria.idCategoria 
    inner join LutaNoticia lutaNoticia on lutaNoticia.idLuta = luta.idLuta 
    inner join Noticia noticia on lutaNoticia.idNoticia = noticia.idNoticia
    inner join LikeNoticia likeNoticia on likeNoticia.idNoticia = noticia.idNoticia
    GROUP BY lutador1.nome, lutador2.nome, card.nome, card.data, categoria.nome, luta.rounds, luta.valendoCinturao , luta.caminhoImagem
    HAVING COUNT(likeNoticia.idUsuario)
    >
    (SELECT AVG(qtdLikes) 
    FROM (SELECT COUNT(*) as qtdLikes FROM LikeNoticia likeNoticia GROUP BY idNoticia) as likesPorNoticia)
        `;
    console.log("Executando a query: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    maisHypadas
}