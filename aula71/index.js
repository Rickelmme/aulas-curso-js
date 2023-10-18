// defineProperty
function Produto1(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor da chave
        writable: false, // pode alterar o valor ou não
        configurable: true // pode configurar a chave ou não
    });
}
const p1 = new Produto1("Camiseta", 20, 3);
console.log(p1)


// defineProperties
function Produto2(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperties(this, {
        nome: {
            enumerable: true, 
            value: nome,
            writable: true, 
            configurable: true
        },
        preco: {
            enumerable: true, 
            value: preco,
            writable: true, 
            configurable: true
        },
    });
}
const p2 = new Produto2("Calça", 40, 5);
console.log(p2)