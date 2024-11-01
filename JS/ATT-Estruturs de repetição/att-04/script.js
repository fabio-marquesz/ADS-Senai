//let jogador1, jogador2, pontosj1 = 0, pontosj2 = 0, quantidadePontos = 0, pontosRodada = 0;

//while (!(pontosj1 >= 21 && pontosj1 - pontosj2 >= 2) && !(pontosj2 >= 21 && pontosj2 - pontosj1 >= 2)) {

//    quantidadePontos = Number (prompt('Quantos pontos foi feito?'));
//    pontosRodada = Number (prompt ('Qual o jogador (1 ou 2)?'));

//    if (pontosRodada == 1) {
//        pontosj1 += quantidadePontos
//        pontosj1 ++;
//        console.log ('Jogador 1' + pontosj1 + ' X ' + pontosj2 + 'Jogador 2');

//    } else if (pontosRodada == 2) {
//        pontosj2 += quantidadePontos
//        pontosj2 ++;
//        console.log ('Jogador 1' + pontosj1 + ' X ' + pontosj2 + 'Jogador 2');
//    } else {
//        alert('Jogador inválido')
//    }

//}

//if (pontosj1 > pontosj2) {
//    console.log('O jogador 1 ganhou!')
//} else {
//    console.log('O jogador 2 ganhou!')
//} 


let opcao ; jogador1 =0, jogador2 =0;

while (true) {
    opcao = Number (prompt('Digite qua jogador que marcou ponto'));

    if (opcao == 1) {
        jogador1++;
        console.log (' Jogador 1 ' + jogador1 + ' X ' + jogador2 + 'Jogador 2');
    } else if (opcao == 2) {
        jogador2++;
        console.log (' Jogador 1 ' + jogador1 + ' X ' + jogador2 + 'Jogador 2');
    }else {
        console.log('Opção inválida');
    }

    if (jogador1 >= 5 && (jogador1 - jogador2) >= 2){
        console.log('Jogador 1 ganhou!');
        break;
    } else if (jogador2 >= 5 && (jogador2 - jogador1) >= 2){
            console.log('Jogador 2 ganhou!');
            break;
        }
}
