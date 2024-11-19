/*11- Você está desenvolvendo um aplicativo de agenda de contatos em JS. Crie um programa que permita ao usuário adicionar, editar, excluir e visualizar contatos em sua agenda. Os contatos devem ser armazenados em vetores que incluem nome, número de telefone e email.*/

let nome = new Array();
let numero = [];
let email = new Array();
let opcao = 0, pesquisa;

do {
    opcao = Number(prompt(`1- Adicionar  2- Editar  3- Excluir  4- Visualizar  0- Sair`));

    switch (opcao) {
        case 1:
            nome.push = prompt("Digite o nome do contato:");
            numero.push = Number(prompt("Digite o número de telefone do contato:"));
            email.push = prompt("Digite o e-mail do contato:");
            break;

        case 2:
            pesquisa = prompt (`Digite o contato a ser editado:`);
            for (let i = 0; i < nome.length; i++){
                if (nome[i] === pesquisa){
                    nome[i] = prompt("Digite o novo nome do contato:");
                    numero[i] = Number(prompt("Digite o novo número de telefone do contato:"));
                    email[i] = prompt("Digite o novo e-mail do contato:");
                }
            }
            break;
            
        case 3:
            for (let i = 0; i < nome.length;i++){
                if (pesquisa == nome[contador]){
                    delete nome[contador];
                    delete numero[contador];
                    delete email[contador];
                }
            }
            break;
            
        case 4:
            console.log("Contatos cadastrados:");
            for (let i = 0; i < nome.length; i++){
                console.log(nome[contador]);
                console.log(numero[contador]);
                console.log(email[contador]);
            }
            break;
            default:
                console.log("Opção inválida!");
            break;

    }

} while (opcao !== 0);



