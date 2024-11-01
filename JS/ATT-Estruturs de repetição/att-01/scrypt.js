let codCidade, numeroVeiculos, numeroAcidentes, maiorAcidente=0, menorAcidente=100000,codCidadeMaior, codCidadeMenor, totalVeiculos=0, veiculosSC=0, veiculosPR=0, veiculosRS=0, acidentesSC=0, numeroAcidentesSC=0, numeroVeiculosRS=0, numeroVeiculosPR=0;

for (let contador = 0; contador < 12; contador++){

    codCidade = Number(prompt(`Digite o código da cidade`));
    numeroVeiculos = Number(prompt(`Digite o número de veículos`));
    numeroAcidentes = Number(prompt(`Digite o números de acidentes`));

    if (numeroAcidentes > maiorAcidente){
        maiorAcidente=numeroAcidentes;
        codCidadeMaior=codCidade;
    }
    if (numeroAcidentes < menorAcidente){
        menorAcidente=numeroAcidentes;
        codCidadeMenor=codCidade;
    }
    totalVeiculos = totalVeiculos + numeroVeiculos ;

    switch (codCidade){
        case 11:
            veiculosSC = numeroVeiculos + veiculosSC;
            acidentesSC = acidentesSC + numeroAcidentes;
            numeroAcidentesSC++;
            break;
            case 12:
                veiculosSC = numeroVeiculos + veiculosSC;
                acidentesSC = acidentesSC + numeroAcidentes;
                numeroAcidentesSC++;
                break;
                case 13:
                    veiculosSC = numeroVeiculos + veiculosSC;
                    acidentesSC = acidentesSC + numeroAcidentes;
                    numeroAcidentesSC++;
                    break;
                    case 14:
                        veiculosSC = numeroVeiculos + veiculosSC;
                        acidentesSC = acidentesSC + numeroAcidentes;
                        numeroAcidentesSC++;
                        break;
                        case 21:
                            veiculosRS = veiculosRS + numeroVeiculos;
                            numeroVeiculosRS++;
                            break;
                            case 22:
                                veiculosRS = veiculosRS + numeroVeiculos;
                                numeroVeiculosRS++;
                                break;
                                case 23:
                                    veiculosRS = veiculosRS + numeroVeiculos;
                                    numeroVeiculosRS++;
                                    break;
                                    case 24:
                                        veiculosRS = veiculosRS + numeroVeiculos;
                                        numeroVeiculosRS++;
                                        break;
                                        case 31:
                                            veiculosPR = veiculosPR + numeroVeiculos;
                                            numeroVeiculosPR++;
                                            break;
                                            case 32:
                                                veiculosPR = veiculosPR + numeroVeiculos;
                                                numeroVeiculosPR++;
                                                break;
                                                case 33:
                                                    veiculosPR = veiculosPR + numeroVeiculos;
                                                    numeroVeiculosPR++;
                                                     break;
                                                     case 34:
                                                        veiculosPR = veiculosPR + numeroVeiculos;
                                                        numeroVeiculosPR++;
                                                        break;
                               


    }

}

let brasil = parseFloat(totalVeiculos/12);
let vSC = parseFloat(veiculosSC/numeroAcidentesSC);
let vRS = parseFloat(veiculosRS/numeroVeiculosRS);
let vPR = parseFloat(veiculosPR/numeroVeiculosPR);
let aSC = parseFloat(acidentesSC/numeroAcidentesSC);



console.log (`Média de veículos no Brasil: ` + brasil );
console.log (`Média de veículos SC: `+ vSC );
console.log (`Média de veículos RS: `+ vRS);
console.log (`Média de veículos PR: `+ vPR);
console.log (`Média de acidentes em SC: `+ aSC);
console.log (`Maior número de acidentes: `+ maiorAcidente + `Codigo da cidade: `+ codCidadeMaior);
console.log (`Menor número de acidentes: `+ menorAcidente + `Codigo da cidade: `+ codCidadeMenor);




 
