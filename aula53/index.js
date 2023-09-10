function retornaFuncao(nome) {
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao('Rick');
const funcao2 = retornaFuncao('Barreto');
console.log(funcao);
console.log(funcao2);
console.log(funcao(), funcao2());