const { romanToInt } = require("./solution");

test("basic test", () => {
    expect(romanToInt('III')).toEqual(3);
});


test("larger values",() =>{
    expect(romanToInt('MCMXCIV')).toEqual(1994);
})
