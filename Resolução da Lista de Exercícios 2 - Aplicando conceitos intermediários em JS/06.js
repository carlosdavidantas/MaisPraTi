console.log("Executando exercicio 06 - Memoization");

function memoize(fn) {
    const cache = new Map();

    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            console.log("Resultado obtido do cache.");
            return cache.get(key);
        }

        const result = fn(...args);
        cache.set(key, result);
        console.log("Resultado calculado e armazenado no cache.");
        return result;
    };
}

function addition(n1, n2) {
    return n1 + n2;
}

const memoizedAddition = memoize(addition);
const result1 = memoizedAddition(5, 10);
const result2 = memoizedAddition(3, 10);
console.log(result2); // 13
console.log(result1); // 15

