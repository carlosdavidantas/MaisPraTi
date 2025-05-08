// Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

console.log("=== Ordenador crescente de valores ===\n");

const valor1 = 11; // Altere esse valor para testar.
const valor2 = 10; // Altere esse valor para testar.
console.log(`Valores: ${valor1}, ${valor2}\n`);

if(valor1 === valor2){
    console.log(`Os valores: ${valor1}, ${valor2} são iguais.`);
    return;
}

if(valor1 < valor2) {
    console.log(`Ordem crescente dos valores: ${valor1}, ${valor2}`);
} else {
    console.log(`Ordem crescente dos valores: ${valor2}, ${valor1}`);
}
