/*2- Utilizando vetores, crie um programa que organize uma quantidade qualquer de números inteiros fornecidos pelo usuário da seguinte forma: primeiro os números pares em ordem crescente e depois os números ímpares em ordem decrescente.*/

let numeros = [];
let pares = [], impares = [];

do {

    let numeros= Number(prompt("Digite um número inteiro (ou 0 para sair): "));

    if (numeros == 0){
        break;
    }
    
    if (numeros % 2 == 0){
        pares.push(numeros);
    } else {
        impares.push(numeros);
    }

} while (true );
pares.sort((a, b) => a - b);
impares.sort((a, b) => b - a);
let resultado = pares.concat(impares);
console.log("Números organizados:");
console.log(resultado.join(", "));


