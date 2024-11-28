let matriz = [];

for (let linha = 0; linha < 3; linha++) {
    matriz[linha] = [];
    for (let coluna = 0; coluna < 5; coluna++) {
        matriz[linha][coluna] = parseIntr(Math.random() * 100);
    }
}

console.log(matriz);