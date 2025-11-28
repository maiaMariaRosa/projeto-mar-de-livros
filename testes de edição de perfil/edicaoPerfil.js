var express = require("express");
var router = express.Router();

var edicaoPerfilController = require("./edicaoPerfilController");

router.post("/editar", function (req, res) {
    edicaoPerfilController.editar(req, res);
});

router.get("/ultimaEdicao/:idUsuario", function (req, res) {
    edicaoPerfilController.ultimaEdicao(req, res);
})

module.exports = router;