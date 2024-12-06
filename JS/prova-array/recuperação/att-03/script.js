/*3- Crie um programa que leia os salários de 10 funcionários. Se o salário de um funcionário for superior a R$ 5.000, adicione um bônus de 10%. Caso contrário, adicione um bônus de 5%. Exiba o salário total de cada funcionário, incluindo o bônus; */

let nome = new Array();
let salario = [];

for(let i = 0; i < 10; i++){
    nome[i] = String(prompt('Digite o nome do funcionario'));
    salario[i] = parseFloat(prompt('Digite o salrio do funcionario'));

    if (salario[i] > 5000){
        salario[i] *= 1.10;
    } else {
        salario[i] *= 1.05;
    }
}

for (let contador = 0; contador < 10; contador++) {
    console.log(`Funcionario: ${nome[contador]}: Ira receber ${salario[contador]}`);
}