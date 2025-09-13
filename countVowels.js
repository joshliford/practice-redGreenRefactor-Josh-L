// Refactored function (cleaned user input and removed else statement):
function countVowels(str) {
    let cleanStr = str.toLowerCase().trim();
    let vowelCounter = 0;
    for (let char of cleanStr) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            vowelCounter += 1;
        }
    }
    return vowelCounter;
}

/* Original function before refactor:
function countVowels(str) {
    let vowelCounter = 0;
    for (let char of str) {
        if (char.toLowerCase() === 'a' || char.toLowerCase() === 'e' || char.toLowerCase() === 'i' ||
            char.toLowerCase() === 'o' || char.toLowerCase() === 'u') {
            vowelCounter += 1;
        } else {
            vowelCounter;
        }
    }
    return vowelCounter;
}
*/

module.exports = {countVowels};