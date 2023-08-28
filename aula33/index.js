const pessoa = {
    nome: 'Rick',
    sobrenome: 'Barreto',
    idade: 18,
    // peso: 60,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

// Atribuição via desestruturação
// const { nome, sobrenome: sobrenome = 'Cruz', peso = ''} = pessoa;
// const { nome, ...resto } = pessoa;
const { nome, sobrenome, peso = ''} = pessoa;
const { endereco: { rua, numero } } = pessoa;

console.log(nome, sobrenome);
console.log(rua, numero);
// console.log(resto);