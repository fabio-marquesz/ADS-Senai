/*11- Você está desenvolvendo um aplicativo de agenda de contatos em JS. Crie um programa que permita ao usuário adicionar, editar, excluir e visualizar contatos em sua agenda. Os contatos devem ser armazenados em vetores que incluem nome, número de telefone e email.
*/
let nome = [], numero = [], email = [], opcao = 0 , pesquisa;

do {
    opcao = Number(prompt(`1- Adicionar\n2- Editar\n3- Excluir\n4- Pesquisar\n0- Sair`));
    switch (opcao){
        case 0:
            console.log(`SAIR`);
            break;
        case 1:
            nome.push(prompt(`Digite um nome`));
            numero.push(Number(prompt("Digite o telefone")));
            email.push(prompt(`Digite o email`));
            break;

        case 2:
            pesquisa = prompt(`Digite o nome do contato para editar`);
            let editado = false;
            for (let contador = 0; contador < nome.length; contador++){
                if (pesquisa == nome[contador]){
                    nome[contador] = prompt(`Digite o novo nome`);
                    numero[contador] = Number(prompt("Digite o novo telefone"));
                    email[contador] = prompt(`Digite o novo email`);
                    console.log("Contato editado com sucesso!");
                    editado = true;
                    break;
                }
            }
            if (!editado) {
                console.log("Contato não encontrado.");
            }
            break;

        case 3:
            pesquisa = prompt(`Digite o nome do contato para excluir`);
            let excluido = false;
            for (let contador = 0; contador < nome.length; contador++){
                if (pesquisa == nome[contador]){
                    nome.splice(contador, 1);
                    numero.splice(contador, 1);
                    email.splice(contador, 1);
                    console.log("Contato excluído com sucesso!");
                    excluido = true;
                    break;
                }
            }
            if (!excluido) {
                console.log("Contato não encontrado.");
            }
            break;

        case 4:
            if (nome.length === 0) {
                console.log("Nenhum contato cadastrado.");
            } else {
                for (let contador = 0; contador < nome.length; contador++){
                    console.log(`Nome: ${nome[contador]}`);
                    console.log(`Telefone: ${numero[contador]}`);
                    console.log(`Email: ${email[contador]}`);
                }
            }
            break;

        default:
            console.log(`Opção inválida`);
            break;
    }
} while (opcao != 0);