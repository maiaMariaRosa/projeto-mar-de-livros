var express = require("express");
var router = express.Router();

var edicaoPerfilController = require("../controllers/edicaoPerfilController");

router.post("/editar", function (req, res) {
    edicaoPerfilController.editar(req, res);
})

module.exports = router;