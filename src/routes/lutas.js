var express = require("express");
var router = express.Router();

var lutasController = require("../controllers/lutaController");

router.get("/maisHypadas", function (req, res) {
    console.log("Entrou na rota /maisHypadas");
    lutasController.maisHypadas(req, res);
}
);

module.exports = router;