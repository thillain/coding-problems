## Problems

### [70. Climbing Stairs](https://leetcode.com/problems/climbing-stairs/) — `Easy`

#### Approaches
- [x] How I Approached
- [x] Brute Force Approach
- [x] Top-Down Approach
- [x] Bottom-Up Approach

---

##### How I Approached
<!-- Your own first read of the problem: what did you notice first?
     Did you spot the Fibonacci pattern immediately, or work through
     small cases (n=1, n=2, n=3) by hand first? What made you reach
     for recursion before DP? -->

##### Brute Force Approach
Recursive, no caching. Recompute every subproblem from scratch.

```javascript
function climbStairs(n) {
    if (n <= 1) return 1;
    return climbStairs(n - 1) + climbStairs(n - 2);
}
```
- **Time:** O(2^n) — exponential, overlapping subproblems recomputed
- **Space:** O(n) — recursion stack

##### Top-Down Approach
Recursion + memoization. Cache each subproblem result the first time it's computed.

```javascript
function climbStairs(n, memo = new Map()) {
    if (n <= 1) return 1;
    if (memo.has(n)) return memo.get(n);

    const result = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
    memo.set(n, result);
    return result;
}
```
- **Time:** O(n)
- **Space:** O(n) cache + O(n) call stack

##### Bottom-Up Approach
Iterative DP, build up from base cases. Optimized to O(1) space since only the last two values are needed.

```javascript
function climbStairs(n) {
    if (n <= 1) return 1;

    let prev2 = 1, prev1 = 1;
    for (let i = 2; i <= n; i++) {
        const curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
}
```
- **Time:** O(n)
- **Space:** O(1)

##### What I Learnt
<!-- The actual takeaway, not the textbook one. E.g.:
     - Where you got stuck (off-by-one? state transition?)
     - The "aha" moment going from top-down to bottom-up
     - A mistake you made and caught
     - How this connects to other problems you've solved -->

##### Notes
- Recurrence: `ways(n) = ways(n-1) + ways(n-2)` — last step was either 1 or 2 stairs
- Structurally identical to Fibonacci
- Good first DP problem to derive top-down → bottom-up conversion