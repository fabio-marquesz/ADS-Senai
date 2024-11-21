let numeros = [];

for (let i = 0; i < 7; i++) {
    numeros[i] = Number(prompt('Digite um número inteiro:')); 

}

let maior = numeros.filter(function(numero){
    return numero > 10;
})

console.log('Quantidade de números maiores que 10:' + maior);
