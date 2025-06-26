console.log("Executando exercicio 05 - Debounce");

const miliseconds = 5000; // 5 segundos

function debounce(fn, delay) {
    let timeoutId;

    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

function logMessage() {
    console.log(`Função executada após ${miliseconds} ms de espera.\n`);
}

const debouncedLogMessage = debounce(logMessage, miliseconds);

debouncedLogMessage();