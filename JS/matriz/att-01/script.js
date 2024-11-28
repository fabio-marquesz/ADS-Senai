/*1- Faça um menu para que o usuário opte por  (1) – Somar  (2) – Subtrair  (3) – Multiplicar  (0) - Sair 2. Prossiga com o programa, adicionando valores as matrizes A e B e calculando:  A soma das matrizes A e B, colocando o resultado na matrizSom.  A subtração das matrizes A e B, colocando o resultado na matrizSub.  A multiplicação das matrizes A e B, colocando o resultado na matrizMul.  Obs: o tamanho das matrizes Sub, Som e Mul será automaticamente programável. Uma vez que o programa sabe qual o número de linhas da matriz A e B e qual o número de colunas da matriz A e B, automaticamente se saberá qual o tamanho da matriz resultante  nos passos anteriores isso já foi feito*/

let matrizA = [], matrizB = [], matrizSom = [], matrizSub = [], matrizMul = [];
let linha  = 0, coluna = 0, menu = 0;

linha = Number(prompt('Digite a quantidade de linhas da matriz'));
coluna = Number(prompt('Digite a quantidade de colunas da matriz'));


for (contadorLinha = 0; contadorLinha <linha; contadorLinha++) {
    matrizA [contadorLinha] = [];
    matrizB [contadorLinha] = [];
    for (contadorColuna = 0; contadorColuna < coluna; contadorColuna++) {
        matrizA [contadorLinha][contadorColuna] = parseInt(Math.random() * 100);
        matrizB [contadorLinha][contadorColuna] = parseInt(Math.random() * 100);
    }
}

do {
    menu = Number(prompt('Escolha uma opção: \n (1) - Somar \n (2) - Subtrair \n (3) - Multiplicar \n (0) - Sair'));
   
    switch (menu) {
        case 1:
            for (contadorLinha = 0; contadorLinha < linha; contadorLinha++) {
                matrizSom[contadorLinha] = [];
                for (contadorColuna = 0; contadorColuna < coluna; contadorColuna++) {
                    matrizSom[contadorLinha][contadorColuna] = matrizA[contadorLinha][contadorColuna] + matrizB[contadorLinha][contadorColuna];
                }
            }
            break;
            
        case 2:
            for (contadorLinha = 0; contadorLinha < linha; contadorLinha++) {
                matrizSub[contadorLinha] = [];
                for (contadorColuna = 0; contadorColuna < coluna; contadorColuna++) {
                    matrizSUB[contadorLinha][contadorColuna] = matrizA[contadorLinha][contadorColuna] - matrizB[contadorLinha][contadorColuna];
                }
            }
            break;
            
        case 3:
            for (contadorLinha = 0; contadorLinha < linha; contadorLinha++) {
                matrizMul[contadorLinha] = [];
                for (contadorColuna = 0; contadorColuna < coluna; contadorColuna++) {
                    matrizMul[contadorLinha][contadorColuna] = matrizA[contadorLinha][contadorColuna] * matrizB[contadorLinha][contadorColuna];
                }
            }
            break;
              
    }

} while(menu !=0);

console.log(matrizSom);

console.log(matrizSub);

console.log(matrizMul);
