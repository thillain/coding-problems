/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {

    if (!s || s.length < 0) {
        return false;
    }

    // const cleaned = s.split('').filter((char) => {
    //     const code = char.charCodeAt(0);
    //     return (
    //         (code > 47 && code < 58) || // numeric (0-9)
    //         (code > 64 && code < 91) || // upper alpha (A-Z)
    //         (code > 96 && code < 123)   // lower alpha (a-z)
    //     );
    // }).join('').toLowerCase();

    // if(cleaned === [...cleaned].reverse().join('')) {
    //     return true;
    // }

    let cleaned = '';

    for (let x = 0; x < s.length; x++) {

        if (
            (s[x] >= 'a' && s[x] <= 'z') || // Lowercase
            (s[x] >= 'A' && s[x] <= 'Z') || // Uppercase
            (s[x] >= '0' && s[x] <= '9')    // Numbers
        ) {
            cleaned += s[x].toLowerCase();
        }
    }

    if (cleaned === [...cleaned].reverse().join('')) {
        return true;
    }
    return false;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
console.log(isPalindrome( " "));