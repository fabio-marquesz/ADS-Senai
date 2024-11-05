/*1- Faça um programa em JS que receba o total das vendas de cada vendedor e armazenadas em um vetor. Receba também o percentual de comissão de cada vendedor e armazene-os em outro vetor. Receba os nomes desses vendedores e armazene ­os em um terceiro vetor. Existem apenas dez vendedores. Calcule e mostre: 
a) Um relatório com os nomes dos vendedores e os valores a receber; 
b) O total das vendas de todos os vendedores; 
c) O maior valor a receber e quem o receberá; 
d) O menor valor a receber e quem o receberá.*/

let vendedores = [];
let totalVendas = new Array();
let percentualVendas = new Array();
let valorFinal = new Array();
let totalVendedores = 0;
let maiorValor = 0;
let menorValor = 99999999;
let nomeMaior, nomeMenor;


for (let contador = 0; contador < 5; contador++){
    vendedores [contador] = prompt ('Digite o nome do vendedor');
    totalVendas [contador] = parseFloat (prompt('Digite o total de vendas'));
    percentualVendas [contador] = parseFloat (prompt('Digite o percentual de comissão'));
}

for (let contador = 0; contador < vendedores.length; contador++) {
    console.log ('Nome do vendedor' +  vendedores[contador]);
    valorFinal[contador] = (totalVendas[contador] * percentualVendas[contador]) / 100;
    console.log ('Sua comissão é:' + valorFinal[contador]);

    if (valorFinal[contador] > maiorValor){
        maiorValor = valorFinal[contador];
        nomeMaior = vendedores[contador];
    }  if (valorFinal[contador] < menorValor){
        menorValor = valorFinal[contador];
        nomeMenor = vendedores[contador];
    }
}

console.log ('Total das vendas de todos os vendedores: ' + totalVendedores);
console.log ('O vendedor'+ nomeMaior + ' recebeu' + maiorValor);
console.log ('O vendedor'+ nomeMenor + ' recebeu' + menorValor);

