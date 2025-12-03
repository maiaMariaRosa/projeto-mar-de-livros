var comentarioModel = require("../models/comentarioModel");

function listarComentariosDia(req, res) {
    comentarioModel.listarComentariosDia().then(function (resultado) {
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
 
function kpiMediaPorDia(req, res) {
    comentarioModel.kpiMediaPorDia().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado para Media de Comentarios por Dia!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function kpiCountComentarios(req, res) {
    comentarioModel.kpiCountComentarios().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado para Contagem de Comentarios por Dia!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listarComentariosDia,
    kpiMediaPorDia,
    kpiCountComentarios
}