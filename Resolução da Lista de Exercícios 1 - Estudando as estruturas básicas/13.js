// Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=== Calculador de média aritmética de números decimais ===\n");

let soma = 0;
let contador = 0;

console.log("Digite números decimais (digite 0 para finalizar e calcular a média):");

function solicitarNumero() {
    rl.question("Digite um número: ", (numero) => {
        const valor = parseFloat(numero);
        if (isNaN(valor)) {
            console.log("Por favor, insira um número válido.");
            solicitarNumero();
            return;
        }
        
        if (valor === 0) {
            if (contador === 0) {
                console.log("Nenhum número foi inserido.");
            } else {
                const media = soma / contador;
                console.log(`A média aritmética dos números é: ${media}`);
            }
            rl.close();
        } else {
            soma += valor;
            contador++;
            solicitarNumero();
        }
    });
}

solicitarNumero();
