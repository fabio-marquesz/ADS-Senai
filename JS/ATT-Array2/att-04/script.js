/*4- Dados dois vetores de tamanho N, diga se os mesmos possuem conteúdo igual.*/

let vetor1 = [];
let vetor2 = [];

for (let contador = 0; contador < 5; contador++) {
  vetor1[contador] = Number(prompt("Digite o valor do 1° vetor"));
  vetor2[contador] = Number(prompt("Digite o valor do 2° vetor"));

}

if (vetor1.length == vetor2.length) {
    console.log("Os vetores possuem conteúdo igual.");
  } else {
    console.log("Os vetores não possuem conteúdo igual.");
  }
