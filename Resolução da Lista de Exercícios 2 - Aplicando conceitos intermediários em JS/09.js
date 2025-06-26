console.log("Executando exercicio 09 - Conversão Entre Formatos");

function paresParaObjeto(pares) {
    return pares.reduce((obj, [chave, valor]) => {
        obj[chave] = valor;
        return obj;
    }, {});
}

function objetoParaPares(objeto) {
    return Object.entries(objeto);
}

const pares = [["nome", "João"], ["idade", 30], ["cidade", "São Paulo"]];
const objeto = paresParaObjeto(pares);
const paresConvertidos = objetoParaPares(objeto);

console.log(objeto);
console.log(paresConvertidos);
