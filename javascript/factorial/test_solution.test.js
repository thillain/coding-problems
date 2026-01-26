const { factorial } = require("./solution");


test("basic test", () => {
    expect(factorial(4)).toEqual(24);
});
