const nomeCompleto = prompt('Digite seu nome completo:');

const qtdLetras = nomeCompleto.length;
const segLetra = nomeCompleto[1];
const primLetra = nomeCompleto.indexOf('r');
const ultLetra = nomeCompleto.lastIndexOf('r');
const tresUltLetra = nomeCompleto.slice(-3);
const palavrasNome = nomeCompleto.split(' ');
const nomeMai = nomeCompleto.toUpperCase();
const nomeMin = nomeCompleto.toLowerCase();

document.body.innerHTML += `O seu nome é ${nomeCompleto}<br />`;
document.body.innerHTML += `Seu nome tem ${qtdLetras} letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${segLetra} <br />`;
document.body.innerHTML += `Qual o primeiro índice da letra "r" no seu nome ? ${primLetra} <br />`;
document.body.innerHTML += `Qual o último índice da letra "r" no seu nome ? ${ultLetra} <br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${tresUltLetra} <br />`;
document.body.innerHTML += `As palavras do seu nome são: ${palavrasNome} <br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nomeMai} <br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nomeMin} <br />`;