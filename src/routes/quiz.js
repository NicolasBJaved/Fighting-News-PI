var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/salvarResultado", function (req, res) {
    console.log("Entrou na rota /salvarResultado");
    quizController.salvarResultado(req, res);
});

router.get("/carregarQuizAtual", function (req, res) {
    console.log("Entrou na rota /carregarQuizAtual");
    quizController.carregarQuizAtual(req, res); 
});

router.post("/carregarPerguntasQuiz", function(req, res){
    console.log("Entrou na rota /carregarPerguntasQuiz");
    quizController.carregarPerguntasQuiz(req, res); 
})

router.post("/verificarUsuarioJaFezQuiz", function (req, res) {
    console.log("Entrou na rota /verificarUsuarioJaFezQuiz");
    quizController.verificarUsuarioJaFezQuiz(req, res);
}
);

module.exports = router;
