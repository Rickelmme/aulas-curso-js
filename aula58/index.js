// Funcão construtora -> objetos
// Funcão fabrica -> objetos
// Construtora - > Pessoa (new)

function Pessoa(nome, sobrenome) {
    // Atributos ou métodos privados
    const ID = 123456;
    const metodoInterno = function() {};

    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': Sou um método');
    };
}
const p1 = new Pessoa('Rickelmme', 'Barreto');
const p2 = new Pessoa('Sophia', 'Barreto');

p1.metodo();