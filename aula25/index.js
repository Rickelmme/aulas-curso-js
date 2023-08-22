/*
Só uma condição do bloco if será executada.
Assim que cair na primeira condição verdadeira,
irá executar o trecho de código e sair.
*/ 
const numero = 10;

if (numero >= 0 && numero <= 5) {
    console.log('O número está entre 0 e 5');
} else if (numero >= 6 && numero <= 8) {
    console.log('O número está entre 6 e 8');
} else if (1 === 1) {       // Verdadeiro
    console.log('LITERAL');
} else if (numero >= 9 && numero <= 11) {      // Verdadeiro
    console.log('O número está entre 9 e 11');
} else {
    console.log('O número não está entre 0 e 11');
}

console.log('...Fora do bloco if');