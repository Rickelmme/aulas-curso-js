// Factory function (função fábrica)
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        fala: function(assunto='falando sobre nada') {
            return `${this.nome} está ${assunto}.`;
        },
        altura,
        peso,
        // Getter
        get imc() {
            const indice = this.peso / (this.altura * this.altura);
            return indice.toFixed(2);
        }
    };
}
const p1 = criaPessoa('Rickelmme', 'Barreto', 1.72, 55);
p1.nomeCompleto = 'Rickelmme Barreto Cruz Silva';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.imc);
console.log(p1.fala());