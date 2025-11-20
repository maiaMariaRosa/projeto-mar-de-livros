// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
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
    // var divAguardar = document.getElementById("div_aguardar");
    // divAguardar.style.display = "flex";
    console.log('aguardadndo...')
}

function finalizarAguardar(texto) {
    // var divAguardar = document.getElementById("div_aguardar");
    // divAguardar.style.display = "none";
    console.log('finalizar aguardar')
    console.log(texto)
    // var divErrosLogin = document.getElementById("div_erros_login");
    // if (texto) {
    //     divErrosLogin.style.display = "flex";
    //     divErrosLogin.innerHTML = texto;
    // }
}

