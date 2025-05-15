var lutaModel = require('../models/lutaModel.js');

function maisHypadas(req, res) {
    console.log("Entrou na controller maisHypadas");

    lutaModel.maisHypadas()
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    maisHypadas
}