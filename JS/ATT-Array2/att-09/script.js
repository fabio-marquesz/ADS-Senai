/*9 -Faça um programa que leia 10 números inteiros, armazene-os em um vetor, solicite um valor de
referência inteiro e:
a) imprima os números do vetor que são maiores que o valor referência
b) retorne quantos números armazenados no vetor são menores que o valor de referência
c) retorne quantas vezes o valor de referência aparece no vetor*/

let numeros = [];
let numerosMaiores = 0;
let referencia = 0;
let numerosMenores = 0;
let apareceu = 0;

referencia = Number (prompt('Digite um número inteiro para referência'));

for (let i = 0; i <5; i++) {
    numeros[i] = Number (prompt('Digite um número inteiro'));   

}

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > referencia) {
        numerosMaiores++;
    }
    if (numeros[i] < referencia) {
        numerosMenores++;
    }
    if (numeros[i] == referencia) {
        apareceu++;
    }
}
console.log('Números maiores que o valor de referência:' + numerosMaiores);
console.log('Números menores que o valor de referência:' + numerosMenores);
console.log('O valor de referência apareceu: '+ apareceu + ' vezes');
