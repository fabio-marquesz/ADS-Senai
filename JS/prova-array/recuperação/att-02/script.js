/*2-   Faça um programa que armazene as horas trabalhadas de 5 funcionários em uma semana. Depois, calcule o total de horas trabalhadas e mostre o valor a ser pago a cada um, sabendo que a hora de trabalho custa R$ 20.*/

let horas = [];
let nome = new Array();

for (let i = 0; i < 5; i++){
    nome[i] = String(prompt('Digite o nome do funcionario'));
    horas[i] = parseFloat(prompt('Digite a horas trabalhadas dos funcionarios:'));
}

let valorHora = horas.map(function(numero){
    return numero * 20
});

for (let contador = 0; contador < 5; contador++) {
    console.log(`Funcionario: ${nome[contador]}: Ira receber ${valorHora[contador]}`);
}
