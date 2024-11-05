let nome = [];
let idade = new Array;

for (let contador = 0; contador < 5; contador++){
    nome  [contador] = prompt('Digite seu nome');
    idade  [contador] = Number(prompt('Digite sua idade'));
}

for (let contador = 0; contador < idade.length; contador++){
    if (idade[contador] >= 18){
        console.log(nome[contador] + ' ' + idade[contador]);
    }
}