// Exemplo 1
// (condição) ? 'Valor para verdadeiro' : 'Valor para falso';
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

console.log(nivelUsuario);

// Exemplo 2
const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);