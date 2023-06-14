function calculaGorjeta() {
    const inputValorDaCompra = document.querySelector('#valorConta').value;
    const inputPorcentagem = document.querySelector('#porcentagem').value;
    const resultado = document.querySelector('.resultado');

    let valorTotalDaCompra = inputValorDaCompra;
    let porcentagem = inputPorcentagem / 100;

    const valorGorjeta = valorTotalDaCompra * porcentagem;

    if(valorTotalDaCompra == '' || valorTotalDaCompra == 0){
        alert('Insira os valores');
        return;
    }

    resultado.innerHTML = `Gorjeta: R$${valorGorjeta.toFixed(2)}`;
}