/* 1 - Faça um programa que receba a temperatura média de cada mês do ano e armazene-as em um vetor. Calcule e mostre a maior e a menor temperatura do ano e em que mês elas ocorreram (mostrar o mês por extenso: 1- Janeiro, 2 – Fevereiro). Desconsidere empates.*/


let temperaturaMedia = [];
let maiorTemperatura = -Infinity , menorTemperatura = Infinity;
let mes = [];

for (let contador = 0; contador < 12; contador++) {
    temperaturaMedia [contador] = Number(prompt('Digite a temperatura: '));

    if (temperaturaMedia[contador] > maiorTemperatura) {
        maiorTemperatura = temperaturaMedia[contador];
        mes[0] = contador + 1;
    } 
    if (temperaturaMedia[contador] < menorTemperatura) {
        menorTemperatura = temperaturaMedia[contador];
        mes[1] = contador + 1;
    }
}

for (let contador = 0; contador <mes.length; contador++) {
    if (contador == 0){
        console.log('maior temperatura '+ maiorTemperatura)
    } else {
        console.log('menor temperatura '+ menorTemperatura)
    }

    switch (mes[contador]) {
        case 1:
            console.log('Janeiro');
            break;
        case 2:
            console.log('Fevereiro');
            break;
        case 3:
            console.log('Março');
            break;
        case 4:
            console.log('Abril');
            break;
        case 5:
            console.log('Maio');
            break;
        case 6:
            console.log('Junho');
            break;
        case 7:
            console.log('Julho');
            break;
        case 8:
            console.log('Agosto');
            break;
        case 9:
            console.log('Setembro');
            break;
        case 10:
            console.log('Outubro');
            break;
        case 11:
            console.log('Novembro');
            break;
        case 12:
            console.log('Dezembro');
            break;
    }
}