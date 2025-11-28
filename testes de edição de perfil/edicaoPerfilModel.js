var database = require("../web/src/database/config");

function editar(livro, genero, descricao, fkUsuario) {
  console.log(
    "ACESSEI A EDICAO PERFIL MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar():",
    livro,
    genero,
    descricao,
    fkUsuario
  );

  // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
  //  e na ordem de inserção dos dados.
  var instrucaoSql = `
        insert into edicaoPerfil (biosDescricao, biosLivros, biosGeneros, fkUsuario) values ('${descricao}', '${livro}', '${genero}', ${fkUsuario});
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function listarEdicaoPerfil(fkUsuario) {
  console.log(
    "ACESSEI A ÚLTIMA EDIÇÃO DO PERFIL, MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
  );
  var ultimaEdicao = `
            select e.biosDescricao as Descricao,
		        e.biosLivros as LivroPreferido,
            e.biosGeneros as GeneroPreferido
            from edicaoPerfil as e
            where fkUsuario = ${fkUsuario}
            order by biosDescricao desc
            limit 1;
             `;

  console.log("Executando a instrução SQL: \n" + ultimaEdicao);
  return database.executar(ultimaEdicao);
}

module.exports = {
  editar,
  listarEdicaoPerfil,
};
