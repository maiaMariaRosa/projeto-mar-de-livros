var express = require("express");
var router = express.Router();

var comentarioController = require("../controllers/comentarioController");

router.get("/por-dia", function (req, res) {
    comentarioController.listarComentariosDia(req, res);
})


module.exports = router;