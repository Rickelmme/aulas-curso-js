const nome = 'Rickelmme Barreto';
const sobrenome = 'Cruz Silva';
const idade = 18;
const peso = 52;
const alturaEmM = 1.72;

let imc = peso / (alturaEmM * alturaEmM);
let anoNascimento = 2023 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);