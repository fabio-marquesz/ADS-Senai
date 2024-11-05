/*No JavaScript, um array (ou vetor) é uma estrutura de dados que permite armazenar uma coleção de elementos. Esses elementos podem ser de qualquer tipo, como números, strings, objetos, ou até mesmo outros arrays. Os arrays em JavaScript são dinâmicos, ou seja, seu tamanho pode variar, e eles possuem um índice baseado em zero.*/

let numero = new Array (1,2,3);
let nome = ["Ana","João","Ismael"];

for (let contador = 0; contador < numero.length; contador++) {
    console.log (numero[contador]);
    console.log (nome[contador]);
}


/*
push (): adiciona um elemento ao final.
pop (): remove o ultimo elemento.
shift (): remove o primeiro elemento.
unshift (): adiciona um ou mais elementos no início.
*/

numero.push(8);
console.log(numero[3]);
numero.pop();
numero.unshift(9);
console.log(numero[0]);
nome.push("Maria");
console.log(nome[3]);