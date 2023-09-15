function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.cliqueBotoes();
        this.capturaEnter();
    };

    this.capturaEnter = () => {
        document.addEventListener('keyup', e => {
            if (e.keyCode !== 13) return;
            this.realizaConta();
        });
    };

    this.cliqueBotoes = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.limpaDisplay();
            if (el.classList.contains('btn-del')) this.deletaUmValor();
            if (el.classList.contains('btn-eq')) this.realizaConta();
        });
    };

    this.addNumDisplay = el => { 
        this.display.value += el.innerText;
        this.display.focus();
    };
    this.limpaDisplay = () => this.display.value = '';
    this.deletaUmValor = () => this.display.value.slice(0, -1);
    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value);
            
            if (!conta) {
                alert('Conta inválida');
                return;
            }
            this.display.value = conta;
        } catch(e) {
            alert('Conta inválida');
            return;
        }
    };
}
const calculadora = new Calculadora();
calculadora.inicia();