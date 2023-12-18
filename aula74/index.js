// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
};

// Instância
const pessoa1 = new Pessoa('Rickelmme', 'Barreto'); // <- Pessoa = Função construtora
const pessoa2 = new Pessoa('Sophia', 'Barreto'); // <- Pessoa = Função construtora

console.dir(pessoa1);
console.dir(pessoa2);