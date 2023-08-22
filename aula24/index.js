/*
Entre 0 - 11 -> Bom dia
Entre 12 - 17 -> Boa tarde
Entre 18 - 23 -> Boa noite
*/

// if -> Pode ser utilizado sozinho
// else -> Precisa ter utilizado um if antes (só pode ter um else)
// else if -> Pode ter vários na checagem
// Podemos usar condições sem else if, utilizando apenas if e else

// Exemplo com if / else if / if
const hora = 200;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia!');
} else if (hora > 12 && hora <= 17) {
    console.log('Boa tarde!');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite!');
} else {
    console.log('Olá');
}

// Exemplo sem else if
const tenhoDinheiro = true;

if (tenhoDinheiro) {
    console.log('Vou sair de casa');
} else {
    console.log('Não vou sair de casa');
}

// Exemplo apenas com if
const nomeTime = 'Corinthians';

if (nomeTime === 'Corinthians') {
    console.log('Vai Corinthians !!!');
}