var database = require("../database/config");

function listarComentariosDia() {
    console.log("ACESSEI O NUMERO DE COMENTARIOS POR DIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
        select 
	    count(idComentario) as qtComentario, 
	    date(dataHora) as dia 
	    from comentarios
        group by dia
        order by dia asc limit 7;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    listarComentariosDia,
}
