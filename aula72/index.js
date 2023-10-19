function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                throw new TypeError("Mensagem");
            }
        }
    });
}
const p1 = new Produto("Camiseta", 20, 3);
p1.estoque = 5;
console.log(p1)
console.log(p1.estoque);