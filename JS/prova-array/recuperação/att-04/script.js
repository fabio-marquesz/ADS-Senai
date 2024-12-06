/*4-Crie um sistema para calcular os descontos em compras de uma loja. O programa deve ler o valor de 5 compras e aplicar um desconto de 10% para compras acima de R$ 200. Exiba o valor do desconto e o valor final para cada compra.*/


let valor = [];

for(let i = 0; i < 5; i++){
    valor[i] = parseFloat(prompt('Digite o valor da compra: '));

    if (valor[i] > 200){
        valor[i] *= 0.90;
    } 
}

for (let contador = 0; contador < 5; contador++) {
    console.log(`Valor a pager ser: ${valor[contador]}`);
}