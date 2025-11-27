var express = require("express");
var router = express.Router();

var edicaoPerfilController = require("../controllers/edicaoPerfilController");

router.post("/editar", function (req, res) {
    edicaoPerfilController.editar(req, res);
});

router.get("/ultimaEdicao", function (req, res) {
    edicaoPerfilController.ultimaEdicao(req, res);
})

module.exports = router;