// 9- Crie um programa de adivinhação em que o computador escolhe aleatoriamente um número entre 1 e 50, e o usuário precisa adivinhar. O programa deve fornecer feedback (maior ou menor) a cada tentativa e permitir apenas 5 tentativas para acertar. Se o usuário acertar antes do limite, exiba uma mensagem de vitória; caso contrário, revele o número ao final.

let numero, tentativas = 0, palpite;

numero = Math.floor(Math.random() * 50) + 1;
console.log('O computador escolheu um número de 1 a 50: ' );

do {
    tentativas++;
    if (tentativas > 5) {
        break;
    }

    palpite = Number(prompt('Adivinhe o número: '));

    if (palpite > numero) {
        console.log('Você errou! O número é menor.');
    } else if (palpite < numero) {
        console.log('Você errou! O número é maior.');
    } else {
        console.log('Você acertou! O número era'+ numero);
        break;
    }

    if (tentativas === 5) {
        console.log('Tentativas esgotadas. O número era ' + numero);
    }
    
} while (true);
    