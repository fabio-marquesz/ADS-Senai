let preco;

preco = parseInt(prompt('Digite o preço do produto: '));

if ( preco < 50){
    console.log (`Barato`);
} else if (preco < 150) {
    console.log(`Moderado`);
} else {
    console.log(`Caro`);
}
 
