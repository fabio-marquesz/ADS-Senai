/*4-Em uma classe há n alunos, cada um dos quais realizou k provas com pesos distintos. Dados n , k, os pesos das k provas e as notas de cada aluno, calcular a média ponderada das provas para cada aluno e a média aritmética da classe em cada uma das provas*/


numerosAlunos = 0;
qtdProvas = 0;
pesoProvas = [];

numerosAlunos = Number(pompt('Digite a quantidade de alunos'));
qtdProvas = Number(prompt('Digite a quantidade de provas'));

for (let contador = 0; contador < qtdProvas; contador++) {
    pesoProvas[contador] = Numeber(prompt('Digite o peso da prova'))
}

let notas = 0, resultadoSoma = 0, resultadoPon = 0;

for (let contador = 0; contador < numerosAlunos; contador++) {
    for (let contador2 = 0; contador2 < qtdProvas; contador2++){
    notas = Numer(prompt('Digite a nota'));
    resultadoSoma += notas;
    resultadoPon += (nota * pesoProvas[contador2] / 10)
    }
}

console.log('media aritimetica' = (resultadoSoma/qtdProvas));
console.log('media ponerada' + resultadoPon);
