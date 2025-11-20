var express = require("express");
var router = express.Router();

var comentarioController = require("../controllers/comentarioIndexController.js");

router.get("/listarComentariosIndex", function (req, res) {
    comentarioController.listarComentariosIndex(req, res);
})

router.post("/cadastrarComentario", function (req, res) {
    comentarioController.cadastrarComentario(req, res);
})


module.exports = 
router,
listarComentariosIndex;