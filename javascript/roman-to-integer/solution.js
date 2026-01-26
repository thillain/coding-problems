/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {

    const romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let total = 0;

    for (let x = 0; x < s.length; x++) {

        const currentValue = romanMap[s[x]];
        const nextValue = romanMap[s[x + 1]];

        if (currentValue < nextValue) {
            total -= currentValue
        } else {
            total += currentValue
        }
    }

    return total;
};

module.exports = { romanToInt }; 