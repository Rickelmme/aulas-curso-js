/*
Operadores Lógicos
&& -> AND -> E -> Todas expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU -> Apenas uma expressão precisa ser verdadeira para retornar true
! -> NOT -> NÃO
*/
const expressaoAnd = true && true && true && true;
const expressaoOr = false || false || true || false;

console.log(`Expressão AND: ${expressaoAnd}`);
console.log(`Expressão OR: ${expressaoOr}`);


// Um exemplo simples
const usuario = 'Rick'; // Form que o usuário digitou
const senha = 'Abc1234'; // Form que o usuário digitou

const vaiLogar = usuario === 'Rick' && senha === 'Abc1234'; // Pode logar
// const vaiLogar = usuario === 'Maria' && senha === 'Abc1234'; // Não pode logar
console.log(`Usuário vai logar: ${vaiLogar}`);


console.log('Nega o false:', !false);  // Um ! nmega o false, retorna true
console.log('Nega o true:', !true);  // Um ! nega o true, retorna false