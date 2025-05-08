//Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.

console.log("=== Calculador de IMC ===\n");

const peso = 70; // Altere esse valor para testar.
const altura = 1.70; // Altere esse valor para testar.
console.log(`Altura: ${altura} | Peso: ${peso}`);

if(peso < 0 || altura < 0 && peso != NaN && altura != NaN){
    console.log("Peso e altura devem ser números maiores que zero.");
    return;
}

const imc = peso / (altura * altura);
const resultado = imc.toFixed(2);

if(resultado >= 30){
    console.log(`Seu IMC é ${resultado} e sua categoria é: obesidade.`);
} else {
    if( resultado >= 25){
        console.log(`Seu IMC é ${resultado} e sua categoria é: sobrepeso.`);
    }
    else {
        if(resultado >= 18.5){
            console.log(`Seu IMC é ${resultado} e sua categoria é: peso normal.`);
        }else {
            console.log(`Seu IMC é ${resultado} e sua categoria é: baixo peso.`)
        }
    }
}
