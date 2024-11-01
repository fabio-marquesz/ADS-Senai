// 3-	Fazer um programa que retorne quantos valores digitados pelo usuário são negativos. Repetir o enquanto até o usuário digitar o valor ZERO:

let numero, contadorNegativo = 0;

do {
    numero = Number(prompt('Digite um número: Digite 0 para encerrar'));

    if (numero < 0){
        contadorNegativo++;
        
    }

} while (numero !== 0);

console.log('Foram digitados ' + contadorNegativo + ' valores negativos.');