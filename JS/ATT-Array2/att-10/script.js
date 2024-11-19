/*10- Leia nomes de pessoas com seus respectivos telefones, sendo a quantidade determinada pelo usuário. Em seguida, pergunte ao usuário qual o nome que ele deseja consultar o telefone. Após sua resposta, exiba o telefone da pessoa procurada.

Informe também se o nome é inexistente */

let pessoas = new Array();
let telefone = [];
let quantidade = 0

quantidade = Number(prompt(`Digite a quantidade de pessoas:`));

for (let i = 0; i < quantidade; i++) {
    pessoas[i] = String(prompt(`Digite o nome da pessoa:`));
    telefone[i] = Number(prompt(`Digite o telefone da pessoa:`));
}

let pesquisa = prompt(`Digite o nome que deseja pesquisar:`);

for (let i = 0; i < quantidade; i++) {
    if (pessoas[i] === pesquisa) {
        console.log(`O telefone da pessoa é ${telefone[i]}`);
        break;
    }
}
