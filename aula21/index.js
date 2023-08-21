/*
Operadores de comparação
Maior que  >
Maior que ou igual a  >=
Menor que  <
Menor que ou igual a  <=
Igualdade  ==   (Não é utilizado)
Igualdade estrita  ===
Diferente  !=   (Não é utilizado)
Difente estrito  !==
*/

/*
Motivo de não utilizar ==/!= (ele converte os valores)
const num1 = 10;  // number
const num2 = '10';  // string
const comp1 = num1 == num2;
console.log(comp);

const num5 = 10;  // number
const num4 = '10';  // string
const comp2 = num4 != num5;
console.log(comp);
*/

const num1 = 10;
const num2 = '10';
const comp1 = num1 === num2;
console.log(comp1);

const num3 = 10;
const num4 = '10';
const comp2 = num3 !== num4;
console.log(comp2);