/*3. Faça um jogo de batalha naval, utilize as seguinte regras:

– O primeiro usuário será o que vai configurar o tabuleiro inserindo os navios.
– O tabuleiro deve ter 8×8
– Quando inserido todos os navios o restante será considerado como “água”.
– Cada navio pode ocupar apenas 1 posição
– O jogador deve respeitar o espaço de 1 célula entre os navios
– O jogador que irá descobrir onde os navios estão tem apenas 10 tiros
– O jogador 1 pode posicionar 5 navios*/

let tabuleiro = [], posicaoLinha = 0, posicaoColuna = 0, tiroLinha = 0, tiroColuna = 0, totalAcerto = 0;

for (let linha = 0; linha < 5; linha++) {
    tabuleiro[linha] = [];
    for (let coluna = 0; coluna < 5; coluna++) {
     tabuleiro[linha][coluna] = 0;
    }
  }

for (let contador = 0; contador < 5; contador++){
    posicaoLinha = Number(prompt('Digite a posiçao da linha do barco'));
    posicaoColuna = Number(prompt('Digite a posiçao da coluna do barco'));
    tabuleiro[posicaoLinha][posicaoColuna] = 1;
}

for (let contador = 0; contador < 10; contador++){
    tiroLinha = Number(prompt('Digite a posiçao da linha que deseja atirar'));
    tiroColuna = Number(prompt('Digite a posiçao da coluna que deseja atirar'));

            if ( 1 == tabuleiro[tiroLinha][tiroColuna]){
                console.log('acertou');
                totalAcerto++
                tabuleiro[tiroLinha][tiroColuna] = 0;
            }
}
    




console.table(tabuleiro);
console.log('voce acertou ', totalAcerto , 'vezes.' );

if (totalAcerto == 5){
    console.log('Acertou todos os codigos')
}






