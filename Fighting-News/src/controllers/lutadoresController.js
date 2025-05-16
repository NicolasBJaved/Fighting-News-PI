var lutadoresModel = require('../models/lutadoresModel.js');

function maisHypados(req, res) {
    console.log("Entrou na função maisHypados do controller");
    lutadoresModel.maisHypados().then(function (resultado){
        console.log("Resultado: ", resultado);
        res.json(resultado);
    })
}

module.exports = {
    maisHypados
}