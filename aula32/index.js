// ...rest, ...spread
// const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
// const [um, dois, tres] = numeros; // Pega quantos números eu quiser
// const [um, , tres, , cinco] = numeros; // Posso pular números utilizando  ,

//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
console.log(numeros[0][2]);

const [,[,,seis]] = numeros;
console.log(seis);

const [lista1, lista2, lista3] = numeros;
console.log(lista3[2]);