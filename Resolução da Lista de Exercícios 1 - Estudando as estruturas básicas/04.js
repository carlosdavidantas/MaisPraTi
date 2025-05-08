// Menu interativo no console que oferece a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Escolha o número 1, 2 ou 3:");

rl.question("Digite sua escolha: ", (escolha) => {
    switch (escolha) {
        case "1":
            console.log("Você escolheu a opção 1!");
            break;
        case "2":
            console.log("Você escolheu a opção 2!");
            break;
        case "3":
            console.log("Você escolheu a opção 3!");
            break;
        default:
            console.log("Opção inválida. Escolha entre 1, 2 ou 3.");
    }
    rl.close();
});
