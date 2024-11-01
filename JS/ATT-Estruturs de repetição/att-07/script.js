let canal, pessoasAssistindo = 0, c4 = 0, c5 = 0, c7 = 0, c12 = 0, totalPA = 0;

do {
    canal = Number(prompt('Digite o número do canal (ou 0 para sair):'));
    
    if (canal !== 0) {
        pessoasAssistindo = Number(prompt('Digite a quantidade de pessoas assistindo:'));

        switch (canal) {
            case 4:
                c4 += pessoasAssistindo;
                break;
            case 5:
                c5 += pessoasAssistindo;
                break;
            case 7:
                c7 += pessoasAssistindo;
                break;
            case 12:
                c12 += pessoasAssistindo;
                break;
            default:
                console.log('Canal inválido');
        }
    }
} while (canal !== 0);


totalPA = c4 + c5 + c7 + c12;

if (totalPA > 0) {
    console.log('Tem ' + ((c4 / totalPA) * 100).toFixed(2) + '% de pessoas assistindo no canal 4');
    console.log('Tem ' + ((c5 / totalPA) * 100).toFixed(2) + '% de pessoas assistindo no canal 5');
    console.log('Tem ' + ((c7 / totalPA) * 100).toFixed(2) + '% de pessoas assistindo no canal 7');
    console.log('Tem ' + ((c12 / totalPA) * 100).toFixed(2) + '% de pessoas assistindo no canal 12');
} else {
    console.log('Nenhuma pessoa assistindo.');
}
