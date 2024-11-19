/*5- Faça um programa que receba a quantidade de peças vendidas por vendedor e armazene essas quantidades em um vetor. Receba também o preço da peça vendida de cada vendedor e armazene esses preços em outro vetor. Existem apenas dez vendedores e cada vendedor pode vender apenas um tipo de peça, isto é, para cada vendedor existe apenas um preço. Calcule e mostre a quantidade total de peças vendidas por todos os vendedores e para cada vendedor calcule e mostre o valor total da venda, isto é, a quantidade de peças * o preço da peça.*/

let qtdPecas = [];
let precoPeca = [];
let vendedor = [];
let qtdTotal = 0, valorTotal = 0;

for (let contador = 0; contador < 3; contador++) {
    vendedor[contador] = prompt('Qual o nome do vendedor:');
    qtdPecas[contador] = Number(prompt('Quantas peças foram vendidas:'));
    precoPeca[contador] = Number(prompt('Qual o preço da peça:'));

    qtdTotal += qtdPecas[contador];
    valorTotal += (qtdPecas[contador] * precoPeca[contador]);
}

console.log(`Quantidade total de peças vendidas: ` + qtdTotal);

for (let contador = 0; contador < 3; contador++) {
    console.log(`Vendedor: ${vendedor[contador]}: Quantidade de peças vendidas: ${qtdPecas[contador]}, Valor total da venda: ${qtdPecas[contador] * precoPeca[contador]}`);
}
