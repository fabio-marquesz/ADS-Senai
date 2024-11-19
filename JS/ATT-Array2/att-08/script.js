/*8- Dado um array com números positivos e negativos, crie um novo array contendo apenas os números negativos, mas com seus sinais invertidos (multiplicando-os por -1).*/

let numero = [], negativo = [];
let num = 0;

for (let i = 0; i <10; i++) {
    numero[i] = Number (prompt(`Digite um valor`));

    if (numero[i] < 0) {
        negativo[num] = numero[i] * -1;
        num++;
    }
}

console.log(negativo);