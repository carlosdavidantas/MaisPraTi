// Resolução do problema utilizando apenas uma estrutura de controle if, sem o else.

console.log("=== Verificador numérico de par ou ímpar ===\n");

const numero = 3; // Altere esse valor para testar.
console.log(`Número a ser verificado: ${numero}`);

if(isNaN(numero)) {
    console.log("Por favor, digite um número válido.");
    rl.close();
    return;
}

if(numero % 2 === 0){
    console.log("O número é par!");
    rl.close();
    return;
}
console.log("O número é ímpar!");
