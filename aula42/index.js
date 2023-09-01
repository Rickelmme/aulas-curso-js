/*
Escreva uma função chamada ePaisagem que recebe dois argumentos,
(largura e altura) de uma imagem (number).
Retorne true se a imagem estiver no modo paisagem.
*/

// Solução 1
function ePaisagem (largura, altura) {
    return largura > altura;
}
console.log(ePaisagem(1920, 1080)); // true
// console.log(ePaisagem(1080, 1920)); // false


// Solução 2
const ePaisagem2 = (largura, altura) => largura > altura;
console.log(ePaisagem2(1920, 1080)); // true
// console.log(ePaisagem2(1080, 1920)); // false