console.log("Executando exercicio 07 - Mapeamento e Ordenação");

const computador = {
    nome: "MACBOOK M4 PRO",
    preco: 19999,
}

const celular = {
    nome: "IPHONE 16 PRO MAX",
    preco: 12499,
}

const produtos = [computador, celular];
console.log("Produtos não ordenados dentro do array: ");
produtos.forEach(produto => console.log(produto));
console.log("\n");


function ordenacaoPrecoCrescente(arrayProdutos) {
    arrayProdutos.sort((a, b) => a.preco - b.preco);
    const test = arrayProdutos.map(p =>  p.nome);
    return test;
}

const arrayOrdenado = ordenacaoPrecoCrescente(produtos);
console.log("Exibindo produtos por nome em ordem crescente pelo preço:");
console.log(arrayOrdenado);
console.log("\n");