function criaPessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('Rick', 'Barreto', 18);
const pessoa2 = criaPessoa('Sophia', 'Mendez', 15);
const pessoa3 = criaPessoa('Thiago', 'Oliveira', 20);

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);

console.log();

const pessoa = {
    nome: 'Rick',
    sobrenome: 'Barreto',
    idade: 18,

    fala() {
        console.log(`A minha idade atual é ${this.idade} anos`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();