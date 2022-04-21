
// web storage -> trabalhando com sessões de usuários

// localStorage.getItem(chave, valor) -> salva os dados no navegador

//sessionStorage.getItem(chave, valor) -> cria uma sessão de usuário


function iniciarSessao(){

    var user = '';


    if(typeof localStorage.user == 'undefined'){

        localStorage.user = document.getElementById("txtNome").value;;    
    }

    user = localStorage.user;

    document.getElementById("logUsuario").innerHTML = user;
}


function finalizarSessao(){
    localStorage.removeItem("user");

    document.getElementById("logUsuario").innerHTML = "";
}