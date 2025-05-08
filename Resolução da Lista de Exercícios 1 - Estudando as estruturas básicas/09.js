// Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console utilizando um loop for.

console.log("=== Contagem regressiva de 10 até 1 ===\n");

const numero = 10;

console.log("Contagem:");
for(let i = numero; i <= numero; i--) {
    console.log(i);
    if(i === 1)
        break;
}
