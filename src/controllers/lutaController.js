var lutaModel = require('../models/lutaModel.js');

function maisHypadas(req, res) {
    console.log("Entrou no controller maisHypadas");

    lutaModel.maisHypadas()
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        ;
}

function carregarLutas(req, res){
    console.log("entrou no controller carregarLutas");
    lutaModel.carregarLutas()
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        ;
}

function adicionarLutas(req, res){
    console.log("entrou no controller carregarLutas");

    var idNoticia = req.body.idNoticiaServer;
    var lutasSelecionadas = req.body.lutasSelecionadasServer;

    lutaModel.adicionarLutas(idNoticia, lutasSelecionadas);
}

module.exports = {
    maisHypadas,
    carregarLutas,
    adicionarLutas
}