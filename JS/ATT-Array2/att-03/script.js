/*3- Faça um algoritmo que, para um vetor X de 15 elementos inteiros, transforme para zero todos os elementos que receberem valores negativos, em seguida, exiba o vetor com as alterações.*/

let vetor = [];

for (let contador = 0; contador <15; contador++) {
    vetor[contador] = Number(prompt('digite os numeros'));

    if (vetor[contador] < 0) {
        vetor[contador] = 0;
    }
}

console.log(vetor);
