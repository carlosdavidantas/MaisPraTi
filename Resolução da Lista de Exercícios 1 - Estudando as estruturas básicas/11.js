// Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


console.log("=== Calculador de soma total de 5 números ===\n");

let soma = 0;
let contador = 0;
let numeros = [];

console.log("Digite 5 números para calcular a soma total:");

function solicitarNumero() {
    if (contador < 5) {
        rl.question(`Digite o número ${contador + 1}: `, (numero) => {
            numeros.push(parseInt(numero));
            contador++;
            solicitarNumero();
        });
    } else {
        for(let i = 0; i < numeros.length; i++) {
            soma += numeros[i];
        }
        
        console.log(`A soma total dos números é: ${soma}`);

        rl.close();
    }
}

solicitarNumero();
