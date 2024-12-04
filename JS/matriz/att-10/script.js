/*10 - Faça um algoritmo para ler uma matriz de 3×4 de números reais e depois exibir o elemento do canto superior e do canto inferior esquerdo.*/

let matriz = [];



for (let linha = 0; linha < 3; linha++){
    matriz[linha] = [];
    for (let coluna = 0; coluna < 4; coluna++){
        matriz[linha][coluna] = parseFloat(Math.random() * 100);
    }
}

console.table(matriz);
console.log('o valor superior esquerdo é: ', matriz[0][0]);
console.log('o valor inferior esquerdo é: ', matriz[2][0]);
