// Usando loop para solicitar os dados de 30 clientes
for (let contador = 0; contador < 30; contador++) {
    // Solicitando o nome do cliente
    let nomeCliente = prompt(`Digite o nome do cliente:`);

    // Solicitando o valor das compras do ano passado
    let valorCompras = parseFloat(prompt(`Digite o valor das compras do ano passado para o cliente :`));

    // Calculando o bônus
    let bonus;
    if (valorCompras < 500000) {
        bonus = (valorCompras * 10)/100;
    } else {
        bonus = (valorCompras * 15)/100;
    }

    // Exibindo a mensagem da correspondência
    console.log (`Você recebeu um bônus de R$ ` + bonus);
}


// Alteração do código com uso de crase ao invés de aspas, e conversão de inteiro para real