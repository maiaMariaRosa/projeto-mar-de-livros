// Dashboard

var express = require("express");
var router = express.Router();

var comentarioController = require("../controllers/comentarioController");

router.get("/por-dia", function (req, res) {
    comentarioController.listarComentariosDia(req, res);
})

router.get("/mediaComentarios", function (req, res){
    comentarioController.kpiMediaPorDia(req, res);
})

router.get("/countComentarios", function (req, res){
    comentarioController.kpiCountComentarios(req, res);
})

module.exports = router;