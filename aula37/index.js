// For clássico -> Geralmente com iteráveis (array ou string)
// For in -> Retorna o índice ou chave (string, array ou objetos)
// For of -> Retorna o valor em si (iteráveis, arrays ou strings)
const nome = ['Rickelmme', 'Julia', 'Caio', 'Maria'];

for (let valor of nome) {
    console.log(valor);
}

/*
Não funciona com objetos
const pessoa = {
    nome: 'Rickelmme',
    sobrenome: 'Barreto'
};

for (let chave of pessoa) {
    console.log(chave);
}
*/