/*3- Faça um programa que leia e monte dois vetores de números inteiros com 20 números cada. Depois de montados, gere um terceiro vetor formado pela diferença dos dois vetores lidos, um quarto vetor formado pela soma dos dois vetores lidos e por último um quinto vetor formado pela multiplicação dos dois vetores lidos.*/

let vetor1 = [], vetor2 = [];

for ( let contador = 0; contador < 5;contador++) {
    vetor1[contador] = Number(prompt(`Digite o número do primeiro vetor:`));
    vetor2[contador] = Number(prompt(`Digite o número do segundo vetor:`));
}

let vetorDiferenca = [], vetorSoma = [], vetorMultiplicacao = [];

for ( let contador = 0; contador < vetor1.length; contador++) {
    vetorDiferenca[contador] = vetor1[contador] - vetor2[contador];
    vetorSoma[contador] = vetor1[contador] + vetor2[contador];
    vetorMultiplicacao[contador] = vetor1[contador] * vetor2[contador];
}

console.log (vetorDiferenca);
console.log (vetorSoma);
console.log (vetorMultiplicacao);