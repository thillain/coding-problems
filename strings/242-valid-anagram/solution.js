/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {

    if (s.length !== t.length) {
        return false;
    }

    const wordMap = new Map();

    for (let char of s) {
        wordMap.set(char, (wordMap.get(char) || 0) + 1);
    }

    for (let char of t) {

        if (!wordMap.has(char)) {
            return false; // Found a letter that wasn't in S
        }


        // subtract the count
        wordMap.set(char, wordMap.get(char) - 1)

        if (wordMap.get(char) === 0) {
            wordMap.delete(char);
        }

    }

    return wordMap.size === 0;
};


console.log(isAnagram('car', 'rac'));
console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('Thillai', 'Deepthi'));