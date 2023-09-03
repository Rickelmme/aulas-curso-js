/*
try {
    É executado quando não há erros
} catch {
    É executado quando há erros
} finally {
    É executado sempre
}
*/

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}
try {
    // const data = new Date('04-01-2005 22:20:40');
    const hora = retornaHora();
    console.log(hora);
} catch(error) {
    // Tratar erro
    // console.log(error);
} finally {
    console.log('Hora atual.');
}