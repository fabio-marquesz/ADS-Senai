// 4-	A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o número de filhos e salário. A prefeitura deseja saber:   
// a) média do salário da população; 
// b) média do número de filhos; 
// c) maior salário; 
// d) percentual de pessoas com salário até R$100,00. 
// O final da leitura de dados se dará com a entrada de um salário negativo.  


let numeroFilhos, salario = 0, contador = 0,somaSalario = 0,somaFilhos = 0, maiorSalario = 0;

while (salario >= 0) {
    numeroFilhos = Number(prompt('Digite a quantidade de filhos:'));
    salario = parseFloat(prompt('Digite o salário da pessoa, negativo para encerrar:'));

    somaSalario += salario;
    somaFilhos += numeroFilhos;
    contador++;

    if (salario > maiorSalario) {
        maiorSalario = salario;
    }
}

console.log ('O maior salario foi de R$'+ maiorSalario);
console.log ('A media de filhos foi de '+ (somaFilhos / contador) );
console.log ('A media de sario foi de '+ (salario / contador));