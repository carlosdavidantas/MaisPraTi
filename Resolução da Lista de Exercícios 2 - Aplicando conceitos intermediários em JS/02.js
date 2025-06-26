console.log("Executando exercicio 02 - Jogo de Adivinhação");
const readline = require("readline-sync");

function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

const numberPicked = generateRandomNumber();

let numberGuess;
let counter = 0;
while (numberGuess !== numberPicked) {
    numberGuess = readline.questionInt("Adivinhe o numeral entre 1 e 100: ");
    counter++;

    if (numberGuess < numberPicked) {
        console.log('O número é mais alto.');
    } else if (numberGuess > numberPicked) {
        console.log('O número é mais baixo.');
    } else {
        console.log(`Parabéns! Você acertou o número ${numberPicked} em ${counter} tentativas.\n`);
    }
}
