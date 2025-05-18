var lutaModel = require('../models/lutaModel.js');

function maisHypadas(req, res) {
    console.log("Entrou na controller maisHypadas");

    lutaModel.maisHypadas()
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        ;
}

module.exports = {
    maisHypadas
}