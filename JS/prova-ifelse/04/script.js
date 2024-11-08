let valorCompra;
let satisfação;
let gorjeta;


valorCompra = parseFloat(prompt('Informe o valor da conta: '));
satisfação = Number(prompt('Informe a qualidade do atendimento: 1-pessimo  2-regular  3-bom  4-excelente'));

if (satisfação == 1 ) {
    console.log('Não havera gorjeta');
} else if (satisfação == 2 ) {
    gorjeta = (valorCompra * 0.05);
    console.log('Gorjeta: R$ ' + gorjeta);
} else if (satisfação == 3 ) {
    gorjeta = (valorCompra * 0.10);
    console.log('Gorjeta: R$'+ gorjeta);
} else {
    gorjeta = (valorCompra * 0.20);
    console.log('Gorjeta: R$'+ gorjeta);
}

