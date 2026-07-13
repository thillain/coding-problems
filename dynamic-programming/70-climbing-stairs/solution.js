/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {

    if (n === 1) return 1;
    if (n === 2) return 2;

    let first = 1;
    let second = 2;
    for (let x = 3; x <= n; x++) {
        let current = first + second;
        first = second;
        second = current;
    }

    return second;

};

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(5));