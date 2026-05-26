# 704. Binary Search - Easy

https://leetcode.com/problems/binary-search/

## Problem

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

## Approach

1. Two pointers.

- left as zero and right as nums.length -1.
- Find the mid index, if the mid index === target then return mid index.Use while loop.
- if mid index < target increment left by mid + 1;
- else decrement right by mid -1

## Complexity

- Time: O(log n)
- Space: O(1)

## Notes

Brute force tried with linear search but its not efficient.
Took the reference from Google for the help as it was the firt pointer sum solved after years

## Things learnt

- Syntax to check array length in python
- Math.floor used to find the mid in js and (left+right)//2 in python
