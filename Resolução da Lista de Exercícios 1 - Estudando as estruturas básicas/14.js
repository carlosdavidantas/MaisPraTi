//Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

console.log("=== Calcula fatorial de um número ===\n");

const numero = 5; // Altere esse valor para testar.
console.log(`Número: ${numero}`);

valor = numero;
for(let i = numero - 1 ; i < numero; i--) {
    valor *= i;
    if(i === 1)
        break;
}
console.log(`${numero} fatorial é: ${valor}`);
