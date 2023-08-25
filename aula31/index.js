// let tem escopo de bloco {....}
// var só tem escopo de função

const verdadeira = true;
let nome1 = 'Rick'; // criando
var nome2 = 'Rick'; // criando

if (verdadeira) {
    let nome1 = 'Barreto'; // criando
    var nome2 = 'Caio'; // redeclarando

    if (verdadeira) {
        var nome2 = 'Luiz'; // redeclarando
        let nome1 = 'Outra coisa';
    }
}
// console.log(nome1, nome2);


function falaOi() {

    if (verdadeira) {
        let nome = 'Rick';
        var sobrenome = 'Barreto';
    }
    // console.log(sobrenome);
}
falaOi();


console.log(sobrenome);
// var sobrenome = 'Barreto';
let sobrenome = 'Barreto';