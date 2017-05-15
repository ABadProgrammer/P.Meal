fuction calcTroco(){
    var valorDado = dinheiro.valor.value;
    var valorTotal = document.getElementById('valorTotal');
    
    if(valorDado > valorTotal){
        dinheiro.troco.value = parseFloat(valorDado)-parseFloat(valorTotal);
        return dinheiro.troco.value;
    }
}