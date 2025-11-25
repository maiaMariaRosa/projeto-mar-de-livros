// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var idUsuario = sessionStorage.ID_USUARIO;
    var comentario = sessionStorage.COMENTARIO;

    var b_usuario = document.getElementById("b_usuario");
    var b_comentario = document.getElementById("b_comentario");

    if (email != null && nome != null) {
        b_usuario.innerHTML = nome;
        b_comentario.innerHTML = comentario;
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    console.log('aguardadndo...')
}

function finalizarAguardar(texto) {
    console.log('finalizar aguardar')
    console.log(texto)
}

