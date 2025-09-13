const vowelCounter = require('../countVowels.js');

let word = 'hello';
let nonString = 42;
let emptyString = "";

describe("the countVowels() function", () => {
    // Failed test prior to function implementation
    test("should return the total number of vowels in a word", () => {
        expect(vowelCounter.countVowels(word)).toBe(2);
    })
    // Negative tests
    test("should return 0 if the string is not a 'string'", () => {
        expect(vowelCounter.countVowels(nonString)).toBe(0);
    })
    test("should return 0 if the string is an empty string", () => {
        expect(vowelCounter.countVowels(emptyString)).toBe(0);
    })
});