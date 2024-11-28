/*3- Escreva um programa que leia uma matriz 4 x 4 de inteiros e atribua o valor 0 para os valores negativos, e mostre todos os valores da matriz.*/

let matriz = [];
let negativo = 0;

for (let linha = 0; linha < 4; linha++){
    matriz[linha] = []
    for(let coluna = 0; coluna < 4; coluna++){
        matriz[linha][coluna] = parseInt(Math.random() * 100);
    }
}

for (let linha = 0; linha < 4; linha++){
    matriz[linha] = []
    for(let coluna = 0; coluna < 4; coluna++){
            if (matriz[linha][coluna]  < 0 ){
                negativo++;
            }
    }
}

console.log(matriz);
console.log(negativo);


