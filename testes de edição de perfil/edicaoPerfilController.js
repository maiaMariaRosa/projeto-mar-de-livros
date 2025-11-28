var edicaoPerfilModel = require("./edicaoPerfilModel");

function editar(req, res) {
    var livro = req.body.livroServer;
    var genero = req.body.generoServer;
    var descricao = req.body.descricaoServer;
    var idUsuario = req.body.idUsuarioServer;

    if (livro == undefined) {
      res.status(400).send("A input livro está undefined!");
    } else if (genero == undefined) {
      res.status(400).send("A input genero preferido está undefined!");
    } else if (descricao == undefined) {
      res.status(400).send("A input descrição está undefined!");
    } else if (idUsuario == undefined){
      res.status(400).send("O idUsuario está undefined, não consigo conectar com a fkUsuario!");

    } else {
      
        edicaoPerfilModel.editar(livro, genero, descricao, idUsuario)
        .then(function (resultado) {
            console.log('Estou no then da edição de perfil');
          res.json(resultado);
        })
        .catch(function (erro) {
          console.log(erro);
          console.log(
            "\nHouve um erro ao realizar o cadastro! Erro: ",
            erro.sqlMessage
          );
          res.status(500).json(erro.sqlMessage);
        });
    }
}

function listarEdicaoPerfil(req, res) {
  var idUsuario = sessionStorage.NOME_USUARIO;

    edicaoPerfilModel.listarEdicaoPerfil(idUsuario).then(function (resultado) {
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
  editar,
  listarEdicaoPerfil
};
