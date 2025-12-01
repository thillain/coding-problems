const { mergeAlternately } = require("./solution");

describe("mergeAlternately", () => {
    test("basic test example1", () => {
        expect(mergeAlternately('abc', 'pqr')).toEqual('apbqcr');
    });

    test("basic test example2", () => {
        expect(mergeAlternately('ab', 'pqrs')).toEqual('apbqrs');
    });

    test("basic test example3", () => {
        expect(mergeAlternately('abcd', 'pq')).toEqual('apbqcd');
    });
});
