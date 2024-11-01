let valor 

valor = parseFloat(prompt('Digite um valor: '));

if (valor > 100) {
    valor = valor * 0.90;
}

console.log('Valor com desconto: ' + valor );