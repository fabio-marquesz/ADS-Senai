/*6-Estoque Mínimo:
Crie um programa que leia um array com o estoque de 8 produtos. O programa deve:

Exibir os produtos cujo estoque é inferior a 10 unidades.
Permitir ao usuário registrar a reposição de um produto específico.*/


let estoque = [];

for (let contador = 0; contador < 8; contador++){
    estoque[contador] = Number(prompt('Digite o estoque de produto'));

    while (estoque[contador] < 10){
        console.log ('Produto ', contador+1 , 'esta com estoque baixo');
        estoque[contador] += Number(prompt('Digite a quantidede que deseja adicionar'));
    }
}

console.log(estoque);