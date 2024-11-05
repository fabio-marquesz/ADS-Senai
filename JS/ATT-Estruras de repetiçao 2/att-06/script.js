// 6-	Peça ao usuário para fornecer um número inicial e um intervalo. Em seguida, faça uma contagem regressiva do número inicial até zero, decrementando pelo intervalo especificado.

let numeroInicial, intervalo;

numeroInicial = Number(prompt('Digite um número inicial:'));
intervalo = Number(prompt('Digite um intervalo:'));

while (numeroInicial >= 0) {
    console.log(numeroInicial);
    numeroInicial -= intervalo;
}