// Resolução do problema utilizando apenas if-else if.

console.log("=== Classificador de notas ===\n");

const nota = 1; // Altere esse valor para testar.
console.log("Nota a ser classificada: " + nota);

if(nota >= 6){
    console.log(`Nota ${nota} - Aprovado!`);
    return;
} else if(nota >= 1){
    console.log(`Nota ${nota} - Recuperação!`);
    return;
} else {
    console.log(`Nota ${nota} - Reprovado!`);
    return;
}
