/*14- Faça um programa que percorre uma lista com o seguinte
formato: [['Brasil', 'Itália', [10, 9]], ['Brasil', 'Espanha', [5, 7]], ['Itália',
'Espanha', [7,8]]]. Essa lista indica o número de faltas que cada time fez em
cada jogo. Na lista acima, no jogo entre Brasil e Itália, o Brasil fez 10
faltas e a Itália fez 9. O programa deve imprimir na tela: a) o total de faltas
do campeonato b) o time que fez mais faltas c) o time que fez menos faltas.*/

let matriz = [
    [10,5],
    [9,7],
    [5,8]
];
let totalFaltas = 0;
let menosFaltas = 999, maisFaltas = 0;

for (let linha = 0; linha < matriz.length; linha++) {
    for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
        totalFaltas += matriz[linha][coluna];

        if (matriz[linha][coluna] < menosFaltas) {
            menosFaltas = matriz[linha][coluna];
        }
        if (matriz[linha][coluna] > maisFaltas) {
            maisFaltas = matriz[linha][coluna];
        }
    }
}




console.table(matriz);
console.log(totalFaltas);
console.log(maisFaltas);
console.log(menosFaltas);
