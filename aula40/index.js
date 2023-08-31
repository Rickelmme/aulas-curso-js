// Continue -> continua para próxima iteração
// Break -> sai do laço
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {

    if (numero === 2) {
        console.log(`Pulei o ${numero}`);
        continue;
    }

    if (numero === 5) {
        console.log(`Parei no ${numero}`);
        break;
    }

    console.log(numero);
}

// Exemplo com While
// let i = 0;
// while (i < numeros.length) {
//     let numero = numeros[i];

//     if (numero === 3) {
//         console.log(`Pulei o ${numero}`);
//         i++;
//         continue;
//     }

//     console.log(numero);

//     if (numero === 6) {
//         console.log(`Encontrei o ${numero}`);
//         i++;
//         break;
//     }
//     i++;
// }