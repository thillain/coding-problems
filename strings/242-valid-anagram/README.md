# 242. Valid Anagram — Easy
https://leetcode.com/problems/valid-anagram/

## Problem
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

## Approach

1. Use a loop and store the chars on map, if the same char was seen then increment the count.
2. On the second loop, look for the char on the map, if its not there return false and exit the loop. If
available then decrement the count
3. Then the delete the char on the map with count zero
4. Finally check the size of the map, if its zero then return true.

## Complexity
- Time: O(n)
- Space: O(k) or O(1)

## Notes
Brute force not tried
