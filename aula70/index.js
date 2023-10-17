const pessoa1 = new Object();
pessoa1.nome = 'Rickelmme';
pessoa1.sobrenome = 'Barreto';
pessoa1.idade = 18;

pessoa1.falarNome = function() {
    return (`${this.nome} está falando Oi`);
};
pessoa1.pegaDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
pessoa1.falarNome();
console.log(pessoa1.pegaDataNascimento())


// FACTORY FUNCTIONS
function criaPesssoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}
const p1 = criaPesssoa('Rickelmme', 'Barreto');
console.log(p1.nomeCompleto);


// CONSTRUCTOR FUNCTIONS
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    // Object.freeze(this)  ->  Nenhum objeto dessa função pode ser alterado
}

const pessoa = new Pessoa('Rickelmme', 'Barreto');
Object.freeze(pessoa); // Não deixa o objeto ser alterado
pessoa.nome = 'Outro nome';
console.log(pessoa);