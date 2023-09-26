//               -5       -4       -3         -2        -1
//                0        1        2          3         4
const nomes = ["Maria", "João", "Eduardo", "Gabriel", "Júlia"];

// nomes.splice(índice, delete, elem1, elem2, elem3);

// simulação do pop
const pop = nomes.splice(-1, 1);

// simulação shift
const shift = nomes.splice(0, 1);

// simulação push
nomes.splice(nomes.length, 0, 'Luiz');

// simulação unshift
nomes.splice(0, 0, 'Luana');

// const nomesRemovidos = nomes.splice(2, Number.MAX_VALUE) Vai até o final do array
console.log(nomes, 'Pop:', pop, 'Shift:', shift);