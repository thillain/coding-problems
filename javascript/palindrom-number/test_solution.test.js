const { isPalindrome } = require("./solution");

test("basic test", () => {
    expect(isPalindrome(121)).toEqual(true);
});

test("validate negative numbers", () => {
    expect(isPalindrome(-121)).toEqual(false);
})

test("basic test2", () => {
    expect(isPalindrome(10)).toEqual(false);
});