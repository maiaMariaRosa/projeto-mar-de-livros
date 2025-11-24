var database = require("../database/config");

function listarComentariosIndex() {
  console.log(
    "ACESSEI O ÚLTIMO COMENTARIOS POSTADO, MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
  );
  var instrucaoSql = `
  select usuario.nome as NomeUser,
		comentarios.comentario as Comentario
        from comentarios
        join usuario
        on comentarios.fkUsuario = usuario.idUsuario
        order by date(dataHora) desc
        limit 5;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrarComentario(comentario) {
  var instrucaoSql = `
        INSERT INTO comentarios ( comentario ) VALUES ('${comentario}');
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  listarComentariosIndex,
  cadastrarComentario,
};
