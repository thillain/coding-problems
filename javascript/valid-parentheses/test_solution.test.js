const { isValid } = require("./solution");

test("basic test", () => {
    expect(isValid('()')).toEqual(true);
});

test('test two', () => {
    expect(isValid('()[]{}')).toEqual(true);
})

test('test three', () => {
    expect(isValid('(]')).toEqual(false);
})

test('test four', () => {
    expect(isValid('([])')).toEqual(true);
})

test('test five', () => {
    expect(isValid('([)]')).toEqual(false);
})

test.only('negative scenario', () => {
    expect(isValid('(')).toEqual(false);
})