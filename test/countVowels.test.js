const vowelCounter = require('../countVowels.js');

let word = 'hello';

// Failed test prior to function implementation
describe("the countVowels() function", () => {
    test("should return the total number of vowels in a word", () => {
        expect(vowelCounter.countVowels(word)).toBe(2);
    })
});