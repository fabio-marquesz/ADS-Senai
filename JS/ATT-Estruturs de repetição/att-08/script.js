let valorCarro = 0, parcelas;

valorCarro = parseFloat (prompt('Qual o valor do veiculo?'));
parcelas = Number (prompt('Em quantas vezes quer parcelar: 6, 12, 18, 24, 30, 36, 42, 48, 54 e 60 vezes ou 1 para avista?'));

switch (parcelas) {

    case 1:
        valorCarro *= 0.80
        console.log ('Valor a vista R$' + valorCarro);
        break;

    case 6:
        valorCarro  *= 1.03
        console.log ('Valor parcelado 6x R$' + valorCarro);
        console.log ('Valor da parcela será R$' + (valorCarro / 6));
        break;
        
    case 12:
        valorCarro  *= 1.06
        console.log ('Valor parcelado 12x R$' + valorCarro);
        console.log ('Valor da parcela será R$' + (valorCarro / 12));
        break;
        
    case 18:
        valorCarro  *= 1.09
        console.log ('Valor parcelado 18x R$' + valorCarro);
        console.log ('Valor da parcela será R$' + (valorCarro / 18));
        break;
        
    case 24:
        valorCarro  *= 1.12
        console.log ('Valor parcelado 24x R$' + valorCarro);
        console.log ('Valor da parcela será R$' + (valorCarro / 24));
        break;
        
    case 30:
        valorCarro  *= 1.15
        console.log ('Valor parcelado 30x R$' + valorCarro);
        console.log ('Valor da parcela será R$' + (valorCarro / 30));
        break;
        
    case 36:
        valorCarro  *= 1.18
        console.log ('Valor parcelado 36x R$' + valorCarro);
        console.log ('Valor da parcela será R$' + (valorCarro / 36));
        break;
        
    case 42:
        valorCarro  *= 1.21
        console.log ('Valor parcelado 42x R$' + valorCarro);
        console.log ('Valor da parcela será R$' + (valorCarro / 42));
        break;
        
    case 48:
        valorCarro  *= 1.24
        console.log ('Valor parcelado 48x R$' + valorCarro);
        console.log ('Valor da parcela será R$' + (valorCarro / 48));
        break;
        
    case 54:
        valorCarro  *= 1.27
        console.log ('Valor parcelado 54x R$' + valorCarro);
        console.log ('Valor da parcela será R$' + (valorCarro / 54));
        break;
        
    case 60:
        valorCarro  *= 1.30
        console.log ('Valor parcelado 60x R$' + valorCarro);
        console.log ('Valor da parcela será R$' + (valorCarro / 60));
        break;
        
    default: 
    console.log ('Opção inválida!');
}