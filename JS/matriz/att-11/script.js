/*11 - Crie uma matriz 7X8 onde cada elemento é a soma dos índices de sua posição dentro da matriz;*/

let matriz = [];

for (let linha = 0; linha < 7; linha++){
    matriz[linha] = [];
    for (let coluna = 0; coluna < 8; coluna++){
        matriz[linha][coluna] = linha + coluna;
    }
}

console.table(matriz);