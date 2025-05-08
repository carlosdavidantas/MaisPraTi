// Resolução do problema utilizando apenas uma estrutra de if-else.

console.log("=== Classificador de idades em categorias ===\n");

const idade = 11; // Altere esse valor para testar.
console.log("Idade a ser classificada: " + idade);

if(idade >= 60){
    console.log(`${idade} é considerado idoso.`);
}else {
    if(idade >= 18){
        console.log(`${idade} é considerado adulto.`);
    }else {
        if(idade >= 12){
            console.log(`${idade} é considerado adolescente.`);
        }else {
            console.log(`${idade} é considerado criança.`);
        }
    }
}