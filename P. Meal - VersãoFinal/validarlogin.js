function validar(){
    var nome=login.nome.value;
    var senha=login.senha.value;
    
    if(nome ==""){
        alert("Por favor, informe seu nome! ");
        login.nome.focus();
                                      
    }
    if(senha==""){
        alert("Informe sua senha! ");
        login.senha.focus();
        return false;
    }
}