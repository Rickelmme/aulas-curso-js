// arguments -> sustenta todos os argumentos enviados
// Não tem arguments em arrow function

const conta = function(operador, acumulador, ...numeros) {
    console.log(arguments);
};
conta('+', 0, 20, 30, 40, 50);

const conta2 = (...args) => {
    console.log(args);
};
conta('+', 0, 20, 30, 40, 50);