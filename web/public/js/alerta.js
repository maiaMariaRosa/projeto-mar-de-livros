var alertas = [];

function obterdados(idComentario) {
    fetch(`/comentarios/por-dia/${idComentario}`)
        .then(resposta => {
            if (resposta.status == 200) {
                resposta.json().then(resposta => {

                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                    alertar(resposta, idComentario);
                });
            } else {
                console.error(`Nenhum dado encontrado para o id ${idComentario} ou erro na API`);
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados do aquario p/ gráfico: ${error.message}`);
        });

}

function alertar(resposta, idComentario) {
    var nivel = resposta[0].idComentario; // Estava "niveleratura", troquei para idComentario

    var grauDeAviso = '';

    var limites = {
        abaixo_esperado: 10,
        dentro_esperado: 15,
        acima_esperado: 20
    };

    var nivelEsperado = 'cor-alerta';

    if (nivel <= limites.abaixo_esperado) {
        nivelEsperado = 'cor-alerta abaixo do esperado';
        grauDeAviso = 'Abaixo do Esperado';
        grauDeAvisoCor = 'cor-alerta abaixo do esperado';
        exibirAlerta(nivel, idComentario, grauDeAviso, grauDeAvisoCor)
    }
    else if (nivel > limites.abaixo_esperado && nivel < limites.acima_esperado) {
        nivelEsperado = 'cor-alerta nivel ideal';
        grauDeAviso = 'Nivel Ideal';
        grauDeAvisoCor = 'cor-alerta nivel ideal';
        exibirAlerta(nivel, idComentario, grauDeAviso, grauDeAvisoCor)
    }
    else if (nivel > limites.acima_esperado) {
        nivelEsperado = 'cor-alerta acima do ideal';
        removerAlerta(idComentario);
    }
    
    var card;

    if (document.getElementById(`nivel_aquario_${idComentario}`) != null) {
        document.getElementById(`nivel_aquario_${idComentario}`).innerHTML = nivel + "°C";
    }

    if (document.getElementById(`card_${idComentario}`)) {
        card = document.getElementById(`card_${idComentario}`)
        card.className = nivelEsperado;
    }
}

function exibirAlerta(nivel, idComentario, grauDeAviso, grauDeAvisoCor) {
    var indice = alertas.findIndex(item => item.idComentario == idComentario);

    if (indice >= 0) {
        alertas[indice] = { idComentario, nivel, grauDeAviso, grauDeAvisoCor }
    } else {
        alertas.push({ idComentario, nivel, grauDeAviso, grauDeAvisoCor });
    }

    exibirCards();
}

function removerAlerta(idComentario) {
    alertas = alertas.filter(item => item.idComentario != idComentario);
    exibirCards();
}

function exibirCards() {
    alerta.innerHTML = '';

    for (var i = 0; i < alertas.length; i++) {
        var mensagem = alertas[i];
        alerta.innerHTML += transformarEmDiv(mensagem);
    }
}

function transformarEmDiv({ idComentario, nivel, grauDeAviso, grauDeAvisoCor }) {

    var descricao = JSON.parse(sessionStorage.AQUARIOS).find(item => item.id == idComentario).descricao;
    return `
    <div class="mensagem-alarme">
        <div class="informacao">
            <div class="${grauDeAvisoCor}">&#12644;</div> 
            <h3>${descricao} está em estado de ${grauDeAviso}!</h3>
            <small>Quantidade de comentários: ${nivel}.</small>   
        </div>
        <div class="alarme-sino"></div>
    </div>
    `;
}

function atualizacaoPeriodica() {
    JSON.parse(sessionStorage.comentario).forEach(item => {
        obterdados(item.id)
    });
    setTimeout(atualizacaoPeriodica, 5000);
}
