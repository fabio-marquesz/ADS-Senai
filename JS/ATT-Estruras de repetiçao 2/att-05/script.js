// 5-	Escreva um algoritmo que calcule a média dos números digitados pelo usuário, se eles forem pares. Termine a leitura se o usuário digitar zero (0).

let numero, contadorPar = 0, contador = 0;

while (numero !== 0) {
    numero = Number(prompt('Digite um numero:'));
   
    contador++;

    if (numero % 2 === 0) {
        contadorPar++;
    }
}

console.log ('Media de numero pares sao: ' + (contadorPar / contador));