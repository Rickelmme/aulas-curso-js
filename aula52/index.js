const nome = 'Rick';

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Barreto';
    falaNome();
}
usaFalaNome();