/*12 - Realize a transposição de uma matriz quadrada. A transposição de uma matriz A é obtida trocando as linhas pelas colunas*/

let matriz = [],
  matriz2 = [];

for (let linha = 0; linha < 5; linha++) {
  matriz[linha] = [];
  for (let coluna = 0; coluna < 5; coluna++) {
    matriz[linha][coluna] = parseInt(Math.random() * 100);
  }
}

for (let linha = 0; linha < 5; linha++) {
  matriz2[linha] = [];
  for (let coluna = 0; coluna < 5; coluna++) {
    matriz2[linha][coluna] = matriz[coluna][linha];
    
  }
}

console.log(matriz);
console.log(matriz2);
