// 07 - Crie um programa que solicite números ao usuário continuamente até que elçe insira um número negativo.Em seguida,exiba a média dos números positivos fornecidos.

let numero, contadorPositivo = 0, somaPositivos = 0;

do {
    numero = Number(prompt('Digite um número:'));

    if (numero >= 0) {
        contadorPositivo++;
        somaPositivos += numero;
    }
} while (numero >= 0);

console.log('Media dos numeros positivos: ' + (somaPositivos / contadorPositivo));