/*6- Crie um programa que gere um vetor com 100 números inteiros aleatórios entre 1 e 1000. Calcule a média desses números.*/

let vetorNumeros = [];
let somaNumeros = 0;

for (let i = 0; i < 100; i++) {
    vetorNumeros[i] = Math.floor(Math.random() * 1000) + 1;
    somaNumeros += vetorNumeros[i];
}

console.log(` Média ` + (somaNumeros / 100));