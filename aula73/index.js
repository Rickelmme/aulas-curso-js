/*
Object.values
Object.entries
Object.assign(des, any)
Object,getOwnPropertyDescriptor(o, 'prop')
...(spread)

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/
const produto = {nome: 'Caneca', preco: 1.80};
// const outraCoisa = Object.assign({}, produto, {material: 'porcelana'})
// const outraCoisa = {...produto}  SPREAD
// const outraCoisa = { nome: produto.nome, preco: produto.preco };
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false
});
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))
// console.log(produto);
// console.log(Object.values(produto));
// console.log(Object.entries(produto));

for (let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}