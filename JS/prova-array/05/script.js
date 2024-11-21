let array = [];
let impar = [], par = []; quantidadeImpar = 0;

let tamanho = Number(prompt('Digite o tamanho do array'));

for (let i = 0; i < tamanho; i++) {
    array[i] = Math.floor(Math.random() * 100);
}

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        par.push(array[i]);
    } else {
        impar.push(array[i]);
    }
}

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < impar.length; j++) {
        if (array[i] === impar[j]) {
            quantidadeImpar++;
        }
    }
}

let somaPar = par.reduce(function(total,par){
    return total + par;
},0);

let somaImpar = impar.reduce(function(total,impar){
    return total + impar;
},0);

let madiaImpar = (somaImpar / quantidadeImpar);

console.log('Média dos números ímpares: ' + madiaImpar);
console.log('A soma dos numeros pares: ' + somaPar);