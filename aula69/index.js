// Exemplo 1
const a1 = [10, 20, 30, 40, 50, 60, 70];
a1.forEach(function(valor, indice, array) {
    console.log(valor, indice);
});

console.log();

// Exemplo 2
const a2 = [10, 20, 30];
let total = 0;
a2.forEach(valor => {
    total += valor;
});
console.log(total);