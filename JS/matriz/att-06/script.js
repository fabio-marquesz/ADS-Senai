/*6 – Escreva um algoritmo para armazenar valores inteiros em uma matriz (5,5). A seguir, calcular a média dos valores pares contidos na matriz e escrever seu conteúdo.*/

let matriz = [];
let somaPar = 0;
let quantidadePar = 0;

for (let linha = 0; linha < 5; linha++){
    matriz[linha] = [];
    for (let coluna = 0; coluna < 5; coluna++){
        matriz[linha][coluna] = parseInt(Math.random() * 100);
    }
}

for (let linha = 0; linha < 5; linha++){
    for (let coluna = 0; coluna < 5; coluna++){
        if (matriz[linha][coluna] % 2 == 0){
            somaPar += matriz[linha][coluna];
            quantidadePar++;
        }   else {
            matriz[linha][coluna] = '*';
        }
    }
}

console.log('A media de numeros pares é ' + (somaPar/quantidadePar));
console.table(matriz);


