let tamanhoj = 1.50, tamanhoz = 1.10, contador = 0 ;

while (tamanhoz < tamanhoj) {
     
    tamanhoj = tamanhoj + 0.02;
    tamanhoz = tamanhoz + 0.03;
    contador++;
    
}

console.log ('Vai demorar' + (contador) + 'anos para Zé atingir o tamonho de João')