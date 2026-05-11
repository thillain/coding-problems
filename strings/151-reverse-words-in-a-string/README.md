# 151. Reverse Words in a String
https://leetcode.com/problems/reverse-words-in-a-string/description/

## Problem

Given an input string `s`, reverse the order of the **words**.
A **word** is defined as a sequence of non-space characters. The **words** in `s` will be separated by at least one space.
Return a string of the words in reverse order concatenated by a single space.

**Note:** that `s` may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

## Examples

### Example 1:
```
Input: s = "the sky is blue"
Output: "blue is sky the"
```

### Example 2:
```
Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
```

### Example 3:
```
Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
```

## Approach

### JavaScript Solution
The solution uses the following approach:
1. Split the string using a regular expression `\s+` to handle multiple spaces and get non-empty words
2. Iterate through the array in reverse order
3. Filter out empty strings (though the regex already handles this mostly)
4. Join the words back with a single space

### Algorithm Steps
- Split the input string by whitespace (handling multiple spaces)
- Create a result array
- Iterate from the end of the split array to the beginning
- Add each non-empty element to the result
- Join the result with a single space

## Complexity Analysis

| Metric | Complexity |
|--------|-----------|
| **Time Complexity** | O(n) - where n is the length of the string, we traverse it once to split and once to join |
| **Space Complexity** | O(n) - for storing the split words and result array |

## Solutions

### JavaScript
See [solution.js](./solution.js)

### Python
See [solution.py](./solution.py)

## Notes

- The regex `/\s+/` matches one or more whitespace characters, effectively splitting on any amount of whitespace
- Alternative approaches include using `trim()` and `split()` with `split(' ').filter()` or using a two-pointer approach for O(1) space
- Python's `str.split()` without arguments automatically handles multiple spaces and leading/trailing spaces
