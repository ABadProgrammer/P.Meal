function validar() {
    var nome=cadastro.nome.value;
    var email=cadastro.email.value;
    var senha=cadastro.senha.value;
    var confsenha=cadastro.confsenha.value;
    
    if(cadastro.nome.value ==""){
        alert("Por favor, informe seu nome! ");
        cadastro.nome.focus();
        return false;
    }
    if(cadastro.email.value ==""){
        alert("Por favor, informe seu email! ");
        cadastro.email.focus();
        return false;
    }
    if(cadastro.senha.value ==""){
        alert("Por favor, preencha todos os campos! ");
        casdastro.senha.focus();
        return false;
    }
    if(cadastro.confsenha.value ==""){
        alert("Por favor, preencha todos os campos! ");
        cadastro.confsenha.focus();
        return false;
    }
    if(cadastro.senha.value !=cadastro.confsenha.value){
        alert("A senha e a senha de confirmação não são iguais! ");
        casdastro.senha.focus();
        cadastro.confsenha.focus();
        return false;
    }
    if(cadastro.senha.value == cadastro.confsenha.value){
        
    }
}