/*9 - Ler uma matriz 5X5 e gerar outra em que cada elemento é o cubo do elemento respectivo na matriz original.*/

let matriz = [], matriz2 = [];

for (let linha = 0; linha < 5; linha++){
    matriz[linha] = [];
    matriz2[linha] = [];
    for (let coluna = 0; coluna < 5; coluna++){
        matriz[linha][coluna] = parseInt(Math.random() * 100);
        matriz2[linha][coluna] = matriz[linha][coluna] ** 3;
    }
}

console.log(matriz);
console.log(matriz2);