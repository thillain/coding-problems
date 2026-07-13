class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if strs.length == 0:
            return ""
        
        prefix = ""
        first_str = strs[0]
        
        for i in range(len(first_str)):
            char = first_str[i]
            
            for j in range(1, len(strs)):
                if i >= len(strs[j]) or strs[j][i] != char:
                    return prefix
            prefix += char
            
        return prefix

       


# Add this block to run the code locally in VS Code
if __name__ == "__main__":
    solver = Solution()
    # Replace with the test cases from the LeetCode problem
    result = solver.longestCommonPrefix(['flower','flow','flight'])
    print(f"Output: {result}")

    result = solver.longestCommonPrefix(['dog','racecar','car'])
    print(f"Output: {result}")
