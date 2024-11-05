// 8 - Peça ao usuario um numero inteiro positivo e exibe todos numeros pares de forma descrescente até chegar a zero.O program deve exibir a sequencia de forma organizada, considerando que o numero deve ser par ou impar.

let numero;

numero = Number(prompt('Digite um número inteiro positivo: '));

while (numero >= 0) {
    if (numero % 2 === 0) {
        console.log(numero);
    }
    numero--;
}