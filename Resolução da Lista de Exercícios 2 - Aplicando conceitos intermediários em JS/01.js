console.log("Executando exercicio 01 - Validação de Datas");

const readline = require("readline-sync");

function ehDataValida(dia, mes, ano) {
    if (ano < 1 || mes < 1 || mes > 12 || dia < 1 || dia > 31) {
        return false;
    }

    if (mes === 2) {
        const isBissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
        return dia <= (isBissexto ? 29 : 28);
    }

    if ([4, 6, 9, 11].includes(mes)) {
        return dia <= 30;
    }

    return true;
}
const dia = readline.questionInt("Digite o dia: ");
const mes = readline.questionInt("Digite o mes: ");
const ano = readline.questionInt("Digite o ano: ");

console.log(`A data ${dia}/${mes}/${ano} é válida?\nResposta: ${ehDataValida(dia, mes, ano)}\n`);
