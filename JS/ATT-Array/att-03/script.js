/*3- Em uma cidade do interior, sabe-se que de janeiro a abril de 1976 (121 dias) não ocorreu temperatura inferior a 15o C e nem superior a 40o C. Fazer um programa JS que determine: 
a) A menor temperatura ocorrida 
b) A maior temperatura ocorrida 
c) A temperatura média do período */

let dias = 0;
let temperatura = [];
let menorTemperatura = 9999999;
let maiorTmeperatura = 0;
let mediaTemperatura = 0;

for (let contador = 0; contador < 5; contador++) {
    temperatura[contador] = Number (prompt('Digite a temperatura dos dias:'))

    if (temperatura[contador] > maiorTmeperatura) {
        maiorTmeperatura = temperatura[contador];
    } if (temperatura[contador] < menorTemperatura) {
        menorTemperatura = temperatura[contador];
    }
    mediaTemperatura += temperatura[contador];
}





console.log('Menor temperatura:' + menorTemperatura);
console.log('Maior temperatura:' + maiorTmeperatura);
console.log('Temperatura média:' + (mediaTemperatura / 5));



