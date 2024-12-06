/*1- Crie um programa que leia o peso de 8 pessoas. Mostre quantas estão abaixo de 60 kg, entre 60 kg e 80 kg e acima de 80 kg.*/

let peso = [];
let abaixo = 0, entre = 0, acima = 0;

for(let i = 0; i < 8 ; i++){
    peso[i] = parseFloat(prompt('Escreva seu peso:'));

    if (peso [i] < 60){
        abaixo++;  
    } else if (peso [i] >= 60 && peso [i] <= 80){
        entre++;   
    } else if (peso[i] > 80){
        acima++;
    }
    
}

console.log( abaixo, ' estão abaixo de 60 kg');
console.log( entre, ' estão entre 60kg a 80kg ');
console.log( acima, ' estão acima de 80kg');