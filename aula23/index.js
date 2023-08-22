/*
&& -> false && true -> false "o valor mesmo"
|| -> true || false -> vai retornar "o valor verdadeiro"

FALSY
false
0
' '   " "   ` `
null / undefined
NaN
*/

// Exemplo com && (AND)
function falaOi () {
    return 'Oi';
}

const vaiExecutar = false;

console.log(vaiExecutar && falaOi());

// Exemplo com || (OR)
// const corUsuario = 'vermelho';
const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(corUsuario);