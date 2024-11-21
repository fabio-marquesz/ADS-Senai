let numeros = [];

for (let i = 0; i < 5; i++) {
    numeros[i] = Number(prompt('Digite um número inteiro:')); 

}

let dobro = numeros.map(function(numero){
    return numero * 2;
})

console.log('Quantidade de números maiores que 10:' + dobro);