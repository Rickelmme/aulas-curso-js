function relogio() {
    function criaOsSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    const relogio = document.querySelector('.relogio');
    
    let segundos = 0;
    let timer;

    function iniciaRelogio() {
        timer = setInterval(function() {
            segundos++;
            relogio.innerHTML = criaOsSegundos(segundos);
        }, 1000);
    }

    document.addEventListener('click', function(e) {
    const elemento = e.target;

    if(elemento.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
        }

        if(elemento.classList.contains('pausar')) {
            relogio.classList.add('pausado');
            clearInterval(timer);    
        }

        if(elemento.classList.contains('zerar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            relogio.innerHTML = '00:00:00'; 
            segundos = 0;    
        }
    });
}
relogio();