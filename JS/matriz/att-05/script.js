/*5- Criar um programa que leia os elementos de uma matriz inteira 4 x 4 e:
a) escreva os elementos da diagonal principal;
b) escreva todos os elementos, exceto os elementos da diagonal principal;*/

let matriz = [];
let matriz2 = [];

for (let linha = 0; linha < 4; linha++){
    matriz[linha]= [];
    matriz2[linha] = [];
    for (let coluna = 0; coluna < 4; coluna++){
        matriz[linha][coluna] = parseInt(Math.random() * 9);
        matriz2[linha][coluna] = matriz[linha][coluna];
    }
}

for (let linha = 0; linha < 4; linha++){
    for (let coluna = 0; coluna < 4; coluna++){
        if (coluna == linha){
            matriz2[linha][coluna] =  matriz2[linha][coluna]
        } else {
            matriz2[linha][coluna] = ` `;
        }
    }
}

for (let linha = 0; linha < 4; linha++){
    for (let coluna = 0; coluna < 4; coluna++){
        if (coluna != linha){
            matriz[linha][coluna] =  matriz[linha][coluna]
        } else {
            matriz[linha][coluna] = ` `;
        }
    }
}



console.table(matriz);
console.table(matriz2);