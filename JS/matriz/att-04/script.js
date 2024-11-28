/*4-Escreva um programa que leia uma matriz 6 x 6 de inteiros. Leia também um valor inteiro x. O programa deverá fazer uma busca desse valor na matriz e, ao final escrever sua localização (linha e coluna) ou uma mensagem de “não encontrado”.*/

let matriz = [];
let valor = 0;
let encontrado = false;

for (let linha = 0; linha < 2; linha++){
    matriz[linha] = []
    for(let coluna = 0; coluna < 2; coluna++){
        matriz[linha][coluna] = Number(prompt('Escreva um numero: '));
    }
}

valor = Number(prompt('Qual numero deseja pesquisar?'));

for (let linha = 0; linha < 2; linha++){
    for(let coluna = 0; coluna < 2; coluna++){
        if (valor == matriz[linha][coluna]){
            console.log('valor igual na linha' + linha + 'e na coluna' + coluna);
            encontrado = true;
        }
    }
}

if (encontrado == false){
    console.log('Nao encontrado');
}