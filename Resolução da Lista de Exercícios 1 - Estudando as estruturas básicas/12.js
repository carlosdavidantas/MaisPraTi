//Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

console.log("=== Imprime a tabuada de um número ===\n");

const numero = 5; // Altere esse valor para testar.
console.log(`Número: ${numero}\n`);

console.log(`Tabuada de ${numero}`);
for(let i = 1; i <=10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}
