# 14. Longest Common Prefix — Easy
https://leetcode.com/problems/longest-common-prefix/


## Problem
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string `""`.

## Approach
First check if the array is empty. If it is, return an empty string. 
Then take the first string and iterate through the characters of the first string.
For each character, check if it is present in all the other strings at the same index.
If it is, append it to the result.
If it is not, return the result.

## Complexity

## Notes
