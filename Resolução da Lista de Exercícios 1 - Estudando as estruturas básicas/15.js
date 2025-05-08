//Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

console.log("=== 10 primeiros números da sequência de Fibonacci ===\n");

function gerarFibonacci(n) {
    let fibonacci = [1, 1];

    for (let i = 2; i < n; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }

    return fibonacci;
}

const primeiros10Fibonacci = gerarFibonacci(10);
console.log("Os primeiros 10 números da sequência de Fibonacci são:");
for (let i = 0; i < primeiros10Fibonacci.length; i++) {
    console.log(primeiros10Fibonacci[i]);
}
