// IIFE -> Immediately invoked function expression
(function(idade, peso, altura) {
    const sobrenome = 'Barreto'

    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Rickelmme'));
    }

    falaNome();
    console.log(`Tem ${idade} anos, ${peso} Kg e ${altura} de altura`);
})(18, 55, 1.72);