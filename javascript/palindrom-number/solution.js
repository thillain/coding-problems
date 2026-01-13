function isPalindrome(num) {

    if (num < 0) {
        return false;
    }

    let reversed = 0;
    let original = num;

    while (num > 0) {
        // 1. Get the rightmost digit
        let digit = num % 10;
        // 2. Build reversed number
        reversed = (reversed * 10) + digit;
        // 3. Remove the rightmost digit from original
        num = Math.floor(num / 10);
    }

    return original === reversed;

};

module.exports = { isPalindrome };