const { mergeAlternately } = require("./solution");

test("basic test", () => {
    expect(mergeAlternately('abc','pqr')).toEqual('apbqcr');
});

test("case one", () => {
    expect(mergeAlternately('ab','pqrs')).toEqual('apbqrs');
});

test("case two", () => {
    expect(mergeAlternately('abcd','pq')).toEqual('apbqcd');
});