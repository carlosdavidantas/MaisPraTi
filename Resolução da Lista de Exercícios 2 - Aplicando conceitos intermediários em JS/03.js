console.log("Executando exercicio 03 - Palavras Únicas");

const string = "olá olá mundo mundo";

const wordsArray = [];
function insertUniqueWordInArray(word) {
    if(wordsArray.length === 0) {
        wordsArray.push(word);
        return;
    }

    let canInsertWord = true;
    for (let index = 0; index < wordsArray.length; index++) {
        if(word === wordsArray[index]){
            canInsertWord = false;
            return;
        }
    }
    wordsArray.push(word);   
}

let lastWhiteSpaceIndex;
let firstWordIndex;
let deBaunce = false;
for (const [index, char] of [...string].entries()) {
    if(char !== " " && deBaunce === false){
        deBaunce = true;
        firstWordIndex = index;
    }

    if (char === " ") {
        lastWhiteSpaceIndex = index;
        const word = string.slice(firstWordIndex, lastWhiteSpaceIndex);
        deBaunce = false;
        insertUniqueWordInArray(word);
    }

    if(index === string.length - 1){
        const word = string.slice(firstWordIndex, string.length)
        insertUniqueWordInArray(word);
    }
}

console.log(`Exibição do array final de palavras únicas: ${wordsArray}\n`);