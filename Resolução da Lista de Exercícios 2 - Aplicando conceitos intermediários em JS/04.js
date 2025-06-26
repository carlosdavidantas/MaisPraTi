console.log("Executando exercicio 04 - Fatorial Recursivo");

function fatorial(n) {
    if(n < 0) {
        throw new Error("O número deve ser maior ou igual a zero.");
    }

    if (n === 0) {
        return 1;
    }
    
    return n * fatorial(n - 1);
}

console.log("Digite um número para calcular o fatorial:");
const readline = require("readline-sync");
const numero = readline.questionInt();

const resultado = fatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}.\n`);
