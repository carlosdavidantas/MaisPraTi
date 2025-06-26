console.log("Executando exercicio 08 - Agrupamento por Propriedade");

const cliente1 = {
    cliente: "An",
    total: 8000
}

const cliente2 = {
    cliente: "Dan",
    total: 6000
}

const cliente3 = {
    cliente: "Dan",
    total: 6000
}

const vendas = [cliente1, cliente2, cliente3];

const objetoAcumulados = vendas.reduce((acumulado, cliente) => {
    acumulado[cliente.cliente] = (acumulado[cliente.cliente] || 0) + cliente.total;
    return acumulado;
}, {});

console.log("Exibindo o objeto da soma acumulada de todos os totais por cliente:");
console.log(objetoAcumulados);
console.log("\n");