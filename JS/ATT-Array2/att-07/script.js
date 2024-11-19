/*7- Crie um array de números e solicite ao usuário um número. Verifique se esse número existe no array e, em caso afirmativo, exiba a posição onde ele está localizado.*/

let numero = [];

for (let i = 0; i < 10; i++) {
    numero[i] = Math.floor(Math.random() * 100);
    console.log(numero[i]);
}

let referencia = Number (prompt(`Dgite um numero`));

for (let i = 0; i < numero.length; i++) {
    if (numero[i] === referencia) {
        console.log(`O numero  está na posicao ` + i);
        break;
    }
}