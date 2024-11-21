/*1.	Durante uma análise de expressões lógicas e aritméticas foi lhe repassado a seguinte expressão a * b > 20 && c % 2
== 0 || (a + b) < 10. (1 ponto)
Qual o resultado da expressão lógica e aritmética da avaliação da expressão para os valores a=3, b=5, c=2 ?
A) Falsa
B) Verdadeira
C) Erro de sintaxe
D) Não é possível determinar o resultado
E) A expressão não é válida para os valores dados*/

let a = 3, b = 5, c = 2;

let resultado = (a * b > 20 && c % 2 == 0) || (a + b) < 10;

console.log(resultado);