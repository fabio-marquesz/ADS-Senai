/*2.	Escreva um programa que leia 10 números e calcule a soma de todos os números ímpares. (2,25 pontos)*/

let numeros = [];
let somaImpares = 0;

for (let i = 0; i < 10; i++) {
    numeros[i] = Number(prompt("Digite um número: "));

    if (numeros[i] % 2 !== 0) {
        somaImpares += numeros[i];
    }
}

console.log("Soma dos números ímpares: " + somaImpares);