/*7 - Escrever um algoritmo para ler uma matriz (7,4) contendo valores inteiros (supor que os valores são distintos). Após, encontrar o menor valor contido na matriz e sua posição.*/


let matriz = [];
let maior = 0, menor = 999, linhaMenor = 0, colunaMenor = 0, linhaMaior = 0, colunaMaior = 0;


for (let linha = 0; linha < 7; linha++){
    matriz[linha] = [];
    for (let coluna = 0; coluna < 4; coluna++){
        matriz[linha][coluna] = parseInt(Math.random() * 100);
    }
}

console.table(matriz);


for (let linha = 0; linha < 7; linha++){
    for (let coluna = 0; coluna < 4; coluna++){
        if (matriz[linha][coluna] < menor){
            menor = matriz[linha][coluna];
            linhaMenor = linha;
            colunaMenor = coluna;
            
        }

        if (matriz[linha][coluna] > maior){
            maior = matriz[linha][coluna];
            linhaMaior = linha;
            colunaMaior =  coluna;
            
        }
    }
}


console.log('O menor valor:', menor, 'esta na linha ', linhaMenor ,' e na coluna ', colunaMenor);
console.log('O maior valor:', maior , ' esta na linha ', linhaMaior ,' e na coluna ', colunaMaior);


