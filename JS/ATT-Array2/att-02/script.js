/*2 - Determinada empresa vende 10 artigos diferentes. Para cada artigo, a empresa o identifica com um código numérico e o preço de venda. Faça um algoritmo para ler os 10 artigos e exibir o código e o preço dos 3 artigos mais caros da empresa.*/

let nomeArtigo = new Array();
let codigo = [], precoVenda = []; maior = [];

for (let contador = 0;contador < 5; contador++) {
    codigo [contador] = Number(prompt('digite o codigo'));
    nomeArtigo [contador] = prompt('digite o nome do artigo');
    precoVenda [contador] = parseFloat(prompt('digite o preco de venda'));
}

maior = [...precoVenda];

maior.sort((a, b) => b -a);

for (let contador = 0;contador < 3; contador++){
    console.log (maior[contador]);
    for (let contador2 = 0; contador2 < codigo.length;contador2++){
        if (maior[contador] == precoVenda[contador2]){
            console.log(codigo[contador2]);
        }
    }
}
