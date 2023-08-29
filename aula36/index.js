// For in -> lê os índices ou chaves do objeto
//                0       1       2
const frutas = ['Pêra', 'Maçã', 'Uva'];

for (let i in frutas) {
    console.log(frutas[i]);
}

console.log();

const pessoa = {
    nome: 'Rickelmme',
    sobrenome: 'Barreto',
    idade: 18,
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}