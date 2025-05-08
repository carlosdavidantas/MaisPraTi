// Programa que calcula o preço de maças baseado na quantidade. 11 und pra baixo -> R$0,30 und , 12 und pra cima -> R$0,25 umd

console.log("=== Calculador de preços ===\n");

const quantidadeMacas = 10 // Altere esse valor para testar.

const precoMenorQueDuzia = 0.30
const precoDuzia = 0.25
console.log(`Quantidade de maças: ${quantidadeMacas}\n`);

if(quantidadeMacas < 12)
    console.log(`Você comprou ${quantidadeMacas} unidades de maça.\nPreço por unidade R$${precoMenorQueDuzia}\nTotal: R$${quantidadeMacas * precoMenorQueDuzia}`);
else
    console.log(`Você comprou ${quantidadeMacas} unidades de maça.\nPreço por unidade R$${precoDuzia}\nTotal: R$${quantidadeMacas * precoDuzia}`);
