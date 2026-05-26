# 125. Valid Palindrome — Easy
https://leetcode.com/problems/valid-palindrome/

## Problem
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

## Approach

1. Use a loop to look for the char less than a and greater than z followed by uppercase and numbers.
Or look for the charcode.
2. With two pointer we can achieve the space for O(1).

## Complexity
- Time: O(n)
- Space: O(n)

## Notes
Brute force not tried