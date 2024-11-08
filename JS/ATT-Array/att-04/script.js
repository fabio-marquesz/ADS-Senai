/*4- Faça um programa em JS que alimente um vetor, com um número de posições definidas pelo usuário. Este vetor deverá armazenar um conjunto de nomes em diferentes posições. Crie um mecanismo para alimentar elementos no vetor e pesquisar por um valor existente.
 ======== MENU ======== 
1) Cadastrar nome 
2) Pesquisar nome 
3) Listar todos os nome 
0) Sair do programa 
——————– 
Digite sua escolha: */

let nome = new Array();
let posições = [];
let pesquisa;
let menu

while (menu != 0) {
    menu = Number(prompt('Digite sua escolha: 1: Cadastrar nome, 2: Pesquisar nome, 3: Listar todos os nome, 0: Sair do programa '));

    switch (menu) {
        case 1:
            for (contador = 0; contador < nome.length; contador++) {
                nome[contador] = prompt('Digite um nome: ');
                posições[contador] = Number(prompt('Digite a posição: '));
            }
            
        case 2:
            pesquisa = prompt('Digite o nome para pesquisar: ');
            for (let i = 0; i < nome.length; i++) {
                if (nome[i] == pesquisa) {
                    console.log('Nome encontrado na posição' + nome[i]);
                }
            }
            break;
            
        case 3:
            console.log (nome[contador]);
            break;

    }
}
