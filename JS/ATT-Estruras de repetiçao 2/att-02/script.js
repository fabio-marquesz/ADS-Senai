// 2-	Fazer um programa que calcule a tabuada de qualquer número, e o limite de cálculo deve ser definido pelo usuário:

let numero, limite;

numero = Number(prompt('Digite um número: '));
limite = Number(prompt('Digite o limite de cálculo: '));

for (let i = 1; i <= limite; i++) {
    resultado = numero * i;
    console.log(numero + 'X' + i + '= ' + resultado);
}


