let codigoPoduto, contadorAn = 0, contadorP = 0, contadorV = 0, contadorH = 0, contadorL = 0, nome;

do {
    codigoPoduto = parseInt(prompt('Digite o código do produto (0 para sair):'));

    if (codigoPoduto === 0) {
        break;
    }

    nome = prompt('Digite o nome do produto:');

    if (codigoPoduto == 1) {
        console.log ('Alimneto não-perecivel');
        contadorAn++;
    } else if (codigoPoduto <= 4) {
        console.log ('Alimento precivel');
        contadorP++;
    } else if (codigoPoduto <= 6) {
        console.log ('Vestuário');
        contadorV++;
    } else if (codigoPoduto == 7) {
        console.log ('Higiene');
        contadorH++;
    } else if (codigoPoduto <= 15) {
        console.log ('Limpeza e utensílios domésticos');
        contadorL++;
    } else {
        console.log ('Código inválido');
    }

} while (codigoPoduto != 0) 

console.log ('Alimento não-precivel' + contadorAn);
console.log ('Alimento precivel' + contadorP);
console.log ('Vestuario' + contadorV);   
console.log ('Higiene' + contadorAn);
console.log ('Limpeza e utensílios domésticos' + contadorL);