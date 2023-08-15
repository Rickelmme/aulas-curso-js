// Minha solução
let varA = 'A';
let varB = 'B';
let varC = 'C';

const varA2 = varA;

varA = varB;
varB = varC;
varC = varA2;

console.log(varA, varB, varC);

// Solução do curso (mais moderna)
let varA = 'A';
let varB = 'B';
let varC = 'C';

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);