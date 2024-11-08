/*1- Faça um algoritmo que leia a nota de 10 alunos de uma turma e guarde-as em um vetor. No final, mostre:
a) Qual é a média da turma
b) Quantos alunos estão acima da média da turma 
c) Qual foi a maior nota digitada
d) Em que posições a maior nota aparece*/

let notas = [];
let media = 0;
let acimaDaMedia = 0;
let maiorNota = 0;
let posicaoMaiorNota = 0;

for (let i = 0; i < 10; i++) {
    notas [i] = parseFloat(prompt('Digite as notas dos alunos'));

    if (notas[i] > maiorNota) {
        maiorNota = notas[i];
        posicaoMaiorNota = i + 1;
    }

    if (notas[i] >= 7){
        acimaDaMedia++;
    }

    media += notas[i];
}

console.log ('A maior nota é ' + maiorNota);
console.log ('A média da turma é ' + (media / 10));
console.log ('Total de alunos acima da média é ' + acimaDaMedia);
console.log ('A posição da maior nota é ' + posicaoMaiorNota);


