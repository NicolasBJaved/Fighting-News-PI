var noticaModel = require('../models/noticiaModel');

function carregarNoticia(req, res) {
    var idNoticia = req.body.idServer;

    noticaModel.carregarNoticia(idNoticia).then(function (resultado) {
        console.log("Resultado: ", resultado);
        res.json(resultado);
    })
}

module.exports = {
    carregarNoticia
};