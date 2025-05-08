// Ler 3 valores, verificar se eles formam um triângulo e informar o tipo de triângulo (equilátero, escaleno ou isósceles).

console.log("=== Verificador e classificador de triângulos ===\n");

const A = 3; // Altere esse valor para testar.
const B = 4; // Altere esse valor para testar.
const C = 5; // Altere esse valor para testar.
console.log(`Valores: A = ${A}, B = ${B}, C = ${C}`);

const isTriangle = (A < B + C) && (B < A + C) && (C < A + B);

if (!isTriangle) {
    console.log("Os valores não formam um triângulo.");
} else if (A === B && B === C) {
    console.log("O triângulo é equilátero.");
} else if (A === B || A === C || B === C) {
    console.log("O triângulo é isósceles.");
} else {
    console.log("O triângulo é escaleno.");
}
