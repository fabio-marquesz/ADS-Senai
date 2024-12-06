/*5- Controle de Vendas Simples:
Uma empresa registra as vendas de 4 produtos durante 7 dias em uma matriz 4x7.

Calcule o total de vendas por produto.
Determine o produto com maior total de vendas.*/


let matriz = [], somaMatriz = 0, maiorTotal = 0, somaLinha1 = 0, somaLinha2 = 0, somaLinha3 = 0, somaLinha4 = 0, maisVendido = 0;

for (let linha = 0; linha < 4; linha++) {
    matriz[linha] = [];
    for (let coluna = 0; coluna < 7; coluna++) {
        matriz[linha][coluna] = parseFloat((Math.random() * 100));
    }
}

for (let linha = 0; linha < 4; linha++) {
    let somaLinha = 0; 
    for (let coluna = 0; coluna < 7; coluna++) {
        somaLinha += matriz[linha][coluna]; 
    }

   
    if (somaLinha > maiorTotal) {
        maiorTotal = somaLinha;
        maisVendido = linha + 1; 
    }

    
    if (linha === 0) somaLinha1 = somaLinha;
    if (linha === 1) somaLinha2 = somaLinha;
    if (linha === 2) somaLinha3 = somaLinha;
    if (linha === 3) somaLinha4 = somaLinha;
}

for (let linha = 0; linha < matriz.length; linha++) {
    for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
        somaMatriz += matriz[linha][coluna]; 
    }
}

console.table(matriz);

console.log('O produto 1 vendeu num total de', somaLinha1);
console.log('O produto 2 vendeu num total de', somaLinha2);
console.log('O produto 3 vendeu num total de', somaLinha3);
console.log('O produto 4 vendeu num total de', somaLinha4);
console.log('O produto que mais vendeu foi o produto', maisVendido);

