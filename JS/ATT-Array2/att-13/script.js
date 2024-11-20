/*13 - Leia dois vetores de 20 posições e calcule um terceiro vetor contendo, nas posições pares os valores do primeiro e nas posições impares os valores do segundo.*/

let vetor1 = [], vetor2 = [];

for (let contador = 0; contador < 5; contador++) {
    vetor1[contador] = Number(prompt(`Digite o número do primeiro vetor:`));
    vetor2[contador] = Number(prompt(`Digite o número do segundo vetor:`));
}

let vetorResultado = [];

for (let contador = 0; contador < vetor1.length; contador++) {
    vetorResultado.push(vetor1[contador]);
    vetorResultado.push(vetor2[contador]);
}

console.log(vetorResultado);