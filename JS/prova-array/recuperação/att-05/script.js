/*5- Crie um sistema de avaliação de clientes para uma empresa de serviços. O programa deve ler a nota de satisfação de 50 clientes (de 1 a 10) e calcular a média geral de satisfação. Se a média for inferior a 6, gere um relatório de insatisfação que contenha o número de clientes insatisfeitos (nota menor que 6)*/

let satisfacao = [];
let media = 0, menor = 0;

for (let i = 0; i < 50; i++){
    satisfacao[i] = Number(prompt('Digite uma nota para a satisfação de 0 a 10:'));

    if (satisfacao[i] < 6){
        menor++;
    }
}

let soma = satisfacao.reduce(function(total, numero) {
    return total + numero;
}, 0);

media = (soma / 50);

if (media < 6){
    console.log('Toatal de clientes insatisfeitos: ', menor);
}

