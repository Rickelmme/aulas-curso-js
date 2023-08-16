let num1 = 0.7;
let num2 = 0.1;

// Utilizando função
// num1 += num2; // 0.8
// num1 += num2; // 0.9
// num1 += num2; // 1.0

// num1 = Number(num1.toFixed(2));

// console.log(num1);
// console.log(Number.isInteger(num1));

// Utilizando cálculo
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.9
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.0

console.log(num1);
console.log(Number.isInteger(num1));

// let num1 = 15;
// let num2 = 2.5;
// console.log(num1.toString() + num2); // Converte um número para uma string
// num1 = num1.toString(); // Converte um número para uma string
// console.log(num1.toString(2)); // Representação binária
// console.log(num1.toFixed(2)); // Muda a quantidade de casas decimais
// console.log(Number.isInteger(num1)); // Mostra se o número é inteiro
// let temp = num1 * 'Olá';
// console.log(Number.isNaN(temp));