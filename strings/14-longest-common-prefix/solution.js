/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return "";

    let prefix = "";

    let firstStr = strs[0];

    for (let i = 0; i < firstStr.length; i++) {
        let char = firstStr[i];
        for (let j = 1; j < strs.length; j++) {
            if (char !== strs[j][i]) {
                return prefix;
            }
        }
        prefix += char;
    }

    return prefix;

};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
