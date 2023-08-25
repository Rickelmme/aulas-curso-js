// Minha Solução
function getDiaSemanaTexto (diaSemana) {
    let diaSemanaTexto;
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = 'Error';
            return diaSemanaTexto;
    }    
}

function getMesTexto (nomeMes) {
    let mesTexto;
    switch (nomeMes) {
        case 0:
            mesTexto = 'Janeiro';
            return mesTexto;
        case 1:
            mesTexto = 'Fevereiro';
            return mesTexto;
        case 2:
            mesTexto = 'Março';
            return mesTexto;
        case 3:
            mesTexto = 'Abril';
            return mesTexto;
        case 4:
            mesTexto = 'Maio';
            return mesTexto;
        case 5:
            mesTexto = 'Junho';
            return mesTexto;
        case 6:
            mesTexto = 'Julho';
            return mesTexto;
        case 7:
            mesTexto = 'Agosto';
            return mesTexto;
        case 8:
            mesTexto = 'Setembro';
            return mesTexto;
        case 9:
            mesTexto = 'Outubro';
            return mesTexto;
        case 10:
            mesTexto = 'Novembro';
            return mesTexto;
        case 11:
            mesTexto = 'Dezembro';
            return mesTexto;
    }    
}

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

const data = new Date();
const hora = data.getHours();
const minuto = data.getMinutes();
const dia = data.getDate();
const semana = data.getDay();
const mes = data.getMonth();
const ano = data.getFullYear();

const diaSemana = semana;
const nomeMes = mes;
const formatSemana = getDiaSemanaTexto(diaSemana);
const formatMes = getMesTexto(nomeMes);

const h1 = document.querySelector('#conteudo');
const inserir = h1.innerHTML = `${formatSemana}, ${dia} de ${formatMes} de ${ano} às ${zeroAEsquerda(`${hora}`)}:${zeroAEsquerda(`${minuto}`)}`;
