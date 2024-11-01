let paisA = 90000000000, paisB = 140000000000, contador = 0;

do {
    paisA *= 1.035;
    paisB *= 1.01;
    contador ++;
} while (paisA < paisB);

console.log('O país A demorou ' + contador + ' anos para atingir o número de habitantes do país B.');