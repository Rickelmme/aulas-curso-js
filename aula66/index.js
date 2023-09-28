// Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);
console.log(numerosEmDobro);

// Para cada elemento:
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];
// Retorne apenas uma string com o nome da pessoa
const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);

// Remova apenas a chave "nome" do objeto
const idade = pessoas.map(obj => ({idade: obj.idade}));
console.log(idade);

// Adicione uma chave id em cada objeto
const id = pessoas.map(function(obj, indice) {
    const newObj = {...obj};
    newObj.id = indice + 1;
    return newObj;
});
console.log(id);