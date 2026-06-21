# 70. Climbing Stairs — Easy
https://leetcode.com/problems/climbing-stairs/

## Problem
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

## Approach

1. The problem is a variation of the Fibonacci sequence, where the number of ways to reach step `n` is the sum of the ways to reach step `n - 1` and step `n - 2`.
2. Rather than using recursion or storing an entire array (which would take O(n) space), we can optimize space by only keeping track of the previous two values using two variables.

### Brute force
```javascript
var climbStairs = function (n) {

    if (n === 1) {
        return 1;
    }

    if (n === 2) {
        return 2;
    }

    return climbStairs(n - 1) + climbStairs(n - 2);

};
```
```javascript
// Botton Approach
var climbStairs = function (n) {

    if (n === 1) return 1;

    let dp = new Array(n);
    dp[0] = 1;
    dp[1] = 2;

    for (let x = 2; x < n; x++) {
        dp[x] = dp[x - 1] + dp[x - 2];
    }

    return dp[n - 1];
};

## Complexity
- Time: O(n)
- Space: O(1)

## Notes
Naive recursion not optimized. Used Gemini AI for help.
