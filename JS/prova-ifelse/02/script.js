let temperatura = 0;

temperatura = parseFloat(prompt('Informe a temperatura: '));

if (temperatura < 0) {
    console.log(' Muito Frio');
} else if (temperatura >= 0 && temperatura <= 30) {
    console.log(' Temperatura agradavel');
} else {
    console.log('Muito Quente');
}