/*
*Primitivos (imutáveis) - string, number, boolean, underfined, 
null, (bigint, symbol) - Valores copiados

*Referência (mutáveis) - array, object, function - Valores passado por referência
*/

const pessoa1 = {
    nome: 'Rick',
    sobrenome: 'Barreto'
};
const pessoa2 = pessoa1;

pessoa1.nome = 'João';
pessoa1.sobrenome = 'Pedro';

console.log(pessoa1);
console.log(pessoa2);

console.log();

let a = [1, 2, 3];
let b = [...a];  // copia o conteúdo
let c = b;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push('Rick');
console.log(a, c);