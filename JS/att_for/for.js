let menu,
    cand1 = 0,
    cand2 = 0,
    cand3 = 0,
    cand4 = 0,
    cand5 = 0,
    cand6 = 0;

for (let contador = 0; contador < 20; contador++) {
    menu = prompt("Digite o numero do seu candidato:");

    menu = Number(prompt("Digite sua opção de voto"));

    switch (menu) {
        case 1:
            cand1++;
            break;
        case 2:
            cand2++;
            break;
        case 3:
            cand3++;
            break;
        case 4:
            cand4++;
            break;
        case 5:
            cand5++;
            break;
        case 6:
            cand6++;
            break;
        default:
            console.log("Candidato inválido!");
            contador--;
            break;
    }
}

console.log("Candidato 1 teve " + cand1 + " votos");
console.log("Candidato 2 teve " + cand2 + " votos");
console.log("Candidato 3 teve " + cand3 + " votos");
console.log("Candidato 4 teve " + cand4 + " votos");
console.log("Votos Nulos " + cand5 );
console.log("Votos em Branco " + cand6 );
