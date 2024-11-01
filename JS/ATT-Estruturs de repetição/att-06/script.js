let listaNumeros, somaPositivos = 0, somaNegativos = 0;
let pares = 0, impares = 0;

do {
    listaNumeros = Number(prompt('Digite um número: Aperte 0 para encerrar.'));

    if (listaNumeros > 0) {
        somaPositivos += listaNumeros; 
    } else if (listaNumeros < 0) {
        somaNegativos += listaNumeros; 
    }

    if (listaNumeros !== 0) { 
        if (listaNumeros % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }

} while (listaNumeros !== 0);

console.log('Soma dos números positivos:', somaPositivos);
console.log('Soma dos números negativos:', somaNegativos);
console.log('Quantidade de números pares:', pares);
console.log('Quantidade de números ímpares:', impares);
