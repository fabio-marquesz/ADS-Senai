/*2- Faça um programa em JS que leia um vetor de seis elementos numéricos inteiros, calcule e mostre: 
a) A quantidade de números pares 
b) Quais os números pares 
c) A quantidade de números ímpares 
d) Quais os números ímpares*/

let numeros = [] ;
let numerosPares = [] ;
let numerosImpares = [] ;
let pares = 0;
let impares = 0;

for (let contador = 0 ; contador < 6; contador++) {
    numeros [contador] = Number(prompt('Digite seis numeros inteiros:'));


    if ( numeros [contador] % 2 == 0 ) {
        numerosPares[pares] = numeros [contador];
        pares++;
        
    } else {
        numerosImpares[impares] = numeros [contador];
        impares++;
        
    }

    
}
console.log('Quantidade de numeros pares: ' + pares);
    console.log('Numeros pares: ' + numerosPares);

    console.log('Quantidade de numeros impares: ' + impares);
        console.log('Numeros impares: ' + numerosImpares);

