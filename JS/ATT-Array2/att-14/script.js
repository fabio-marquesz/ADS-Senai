/*14 - Você recebe um vetor de números inteiros. Escreva um programa em JS que determine a moda do vetor, ou seja, o elemento que mais frequentemente aparece. Se houver mais de um elemento com a mesma frequência máxima, retorne todos eles.*/

let vetor = [];
let maiorFrequência = 0;
let maior = 0, numero = 0;

for (let i = 0; i <5; i++) {
    vetor[i] = Number(prompt(`Digite 10 numeros inteiros`));
}


for (let i = 0; i < vetor.length; i++) {
     numero = 0;
     for (let j = 0; j < vetor.length; j++) {
         if (vetor[i] == vetor[j]) {
             numero++;
         }
     } 
     if (numero >= maiorFrequência) {
        let cont = 0;
        maiorFrequência = numero;
         maior.push(vetor[i]);
        cont++;

    }
}

console.log(maior);