var lutadoresModel = require('../models/lutadoresModel.js');

function maisHypados(req, res) {
    console.log("Entrou na função maisHypados do controller");
    lutadoresModel.maisHypados().then(function (resultado){
        console.log("Resultado: ", resultado);
        res.json(resultado);
    })
}

function carregarlutadores(req, res){
    console.log("Entrou na função carregarlutadores do controller");
    lutadoresModel.carregarlutadores().then(function (resultado){
        console.log("Resultado: ", resultado);
        res.json(resultado);
    })
}

function adicionarLutadores(req, res){
    console.log("Entrou na função adicionarLutadores do controller");

    var idNoticia = req.body.idNoticiaServer;
    var lutadoresSelecionados = req.body.lutadoresSelecionadosServer;

    lutadoresModel.adicionarLutadores(idNoticia, lutadoresSelecionados);
}

module.exports = {
    maisHypados,
    carregarlutadores,
    adicionarLutadores
}