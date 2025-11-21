var comentariosIndexModel = require("../models/comentariosIndexModel");

function cadastrarComentario(req, res) {
    console.log(`BODY: ${req.body}`)
    var comentario = req.body.comentario;

    if (comentario == undefined) {
        res.status(400).send("Erro no comentario");
    } else {
        comentariosIndexModel.cadastrarComentario(comentario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


function listarComentariosIndex(req, res) {
    comentariosIndexModel.listarComentariosIndex().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    listarComentariosIndex,
    cadastrarComentario
}