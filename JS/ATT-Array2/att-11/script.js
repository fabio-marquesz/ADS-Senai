/*11- Você está desenvolvendo um aplicativo de agenda de contatos em JS. Crie um programa que permita ao usuário adicionar, editar, excluir e visualizar contatos em sua agenda. Os contatos devem ser armazenados em vetores que incluem nome, número de telefone e email.*/

let nome = new Array();
let numero = [];
let email = new Array();
let opcao = 0;

do {
    opcao = Number(prompt(`1- Adicionar  2- Editar  3- Excluir  4- Visualizar  0- Sair`));

    switch (opcao) {
        case 1:
            nome.push(prompt("Digite o nome do contato:"));
            numero.push(Number(prompt("Digite o número de telefone do contato:")));
            email.push(prompt("Digite o e-mail do contato:"));
            break;

        case 2:
            let indice = Number(prompt("O que deseja editar? 1- Nome  2- Telefone  3- E-mail"));
            if (indice >= 1 && indice <= 3) {
                let posicao = Number(prompt("Qual posição deseja editar? (Índice começando de 0)"));
                if (posicao >= 0 && posicao < nome.length) {
                    switch (indice) {
                        case 1:
                            nome[posicao] = prompt("Digite o novo nome do contato:");
                            break;
                        case 2:
                            numero[posicao] = Number(prompt("Digite o novo número de telefone do contato:"));
                            break;
                        case 3:
                            email[posicao] = prompt("Digite o novo e-mail do contato:");
                            break;
                    }
                } else {
                    console.log("Posição inválida.");
                }
            } else {
                console.log("Opção inválida.");
            }
            break;

        case 3:
            let posExcluir = Number(prompt("Digite a posição do contato a ser excluído (Índice começando de 0):"));
            if (posExcluir >= 0 && posExcluir < nome.length) {
                nome.splice(posExcluir, 1);
                numero.splice(posExcluir, 1);
                email.splice(posExcluir, 1);
                console.log("Contato excluído com sucesso.");
            } else {
                console.log("Posição inválida.");
            }
            break;

        case 4:
            if (nome.length === 0) {
                console.log("Não há contatos para visualizar.");
            } else {
                console.log("Contatos cadastrados:");
                for (let i = 0; i < nome.length; i++) {
                    console.log(`${i}: Nome: ${nome[i]}, Telefone: ${numero[i]}, E-mail: ${email[i]}`);
                }
            }
            break;

        case 0:
            console.log("Saindo...");
            break;

        default:
            console.log("Opção inválida. Tente novamente.");
            break;
    }

} while (opcao !== 0);



