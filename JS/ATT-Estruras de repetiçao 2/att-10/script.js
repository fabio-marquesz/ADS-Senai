// 10- Solicite ao usuário um número inteiro n e exiba uma estrutura em forma de triângulo numérico de tamanho n. Cada linha do triângulo deve conter números de 1 até o número da linha. Exemplo para: n = 5..
//1
//1 2
//1 2 3
//1 2 3 4
//1 2 3 4 5

let numero ;

numero = Number(prompt('Digite um número inteiro: '));

for (let i = 1; i <= numero; i++) {
    let linha = '';
    for (let j = 1; j <= i; j++) {
        linha += j +'';
    }
    console.log(linha);
}