var database = require("../database/config");

function listarComentariosDia() {
  console.log(
    "ACESSEI O NUMERO DE COMENTARIOS POR DIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
  );
  var instrucaoSql = `
                    select 
	                    count(idComentario) as qtComentario, 
	                    date(dataHora) as dia 
	                    from comentarios
                        group by dia
                          order by dia asc;
                    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
} 
 
function kpiMediaPorDia() {
  console.log(
    "ACESSEI A MÉDIA DE COMENTARIOS POR DIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function kpiMediaPorDia()"
  );
  var mediaComentarios = `
                          select round(avg(qtdPorDia),2) as mediaDeComentarios 
                          from 
	                        (select count(*) as 'qtdPorDia', 
		                        date(dataHora) as 'dia'
                              from comentarios
		                            group by date(dataHora)) as mediaDeComentarios;
                          `;

  console.log("Executando a mediComentarios SQL: \n" + mediaComentarios);
  return database.executar(mediaComentarios);
}
 
function kpiCountComentarios() {
  console.log(
    "ACESSEI A CONTAGEM DE COMENTARIOS POR DIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function kpiCountComentarios()"
  );
  var countComentarios = `
                          select count(idComentario) as qtdComentarios 
                            from comentarios
	                            where date(dataHora) = current_date();
                          `;

  console.log("Executando a countComentarios SQL: \n" + countComentarios);
  return database.executar(countComentarios);
}

module.exports = {
  listarComentariosDia,
  kpiMediaPorDia,
  kpiCountComentarios,
};
