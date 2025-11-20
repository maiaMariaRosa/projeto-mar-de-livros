var database = require("../database/config");

function listarComentariosIndex() {
    console.log("ACESSEI O ÚLTIMO COMENTARIOS POSTADO, MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
    select comentario 
	    from comentarios
		order by comentario limit 3;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function publicar(comentario) {
    console.log("ACESSEI O COMENTARIOS INDEX MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", comentario);
    var instrucaoSql = `
        INSERT INTO comentarios ( comentario ) VALUES (${comentario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listarComentariosIndex,
    publicar
}

