/*8 - Escreva um algoritmo que lê uma matriz M(5,5) e calcula as somas:
a) da linha 4 de M.
b) da coluna 2 de M.
c) da diagonal principal.
d) da diagonal secundária.
e) de todos os elementos da matriz.
f) Escreva estas somas e a matriz.*/

let matriz = [];
let somaLinha = 0, somaColuna = 0, diagonalPrimaria = 0, diagonalSecundaria = 0, somaMatriz = 0;


for (let linha = 0; linha < 5; linha++){
    matriz[linha] = [];
    for (let coluna = 0; coluna < 5; coluna++){
        matriz[linha][coluna] = parseInt(Math.random() * 100);
    }
}

for (let linha = 0; linha < 5; linha++){
    for (let coluna = 0; coluna < 5 ; coluna++){
        
        if (coluna == linha){
            diagonalPrimaria +=  matriz[linha][coluna];
        }

        if (coluna + linha == 5 - 1 ) {
            diagonalSecundaria +=  matriz[linha][coluna];
        }

        if (coluna == 1 ){
            somaColuna += matriz[linha][1];
        }

        if (linha == 3){
            somaLinha += matriz[4][coluna];
        }
    }
}

for (let linha = 0; linha < matriz.length; linha++) {
    for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
        somaMatriz += matriz[linha][coluna];
    }
}

console.table(matriz);
console.log('A soma da linha 4 é: ', somaLinha);
console.log('A soma da coluna 2 é: ', somaColuna);
console.log('A soma da diagonal principal é: ', diagonalPrimaria);
console.log('A soma da secundaria é: ', diagonalSecundaria);
console.log('A soma de toda matriz é: ', somaMatriz);

