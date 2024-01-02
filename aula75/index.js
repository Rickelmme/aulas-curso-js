function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('Camiseta', 50);
const p2 = {
    nome:'Caneca',
    preco: 15
};
Object.setPrototypeOf(p2, Produto.prototype);

p1.desconto(5);
p2.aumento(10);

console.log(p1);
console.log(p2);