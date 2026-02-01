/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length > 0 && s.length % 2 === 0) {

        const map = {
            ')': '(',
            ']': '[',
            '}': '{'
        }

        let stack = [];

        for (let char of s) {
            if (char === '(' || char === '[' || char === '{') {
                stack.push(char);
            } else {

                if (stack.length === 0 || stack[stack.length - 1] !== map[char]) {
                    return false;
                }

                stack.pop()
            }
        }
        return stack.length === 0;
    }
};