class Solution:
    def reverseWords(self, s: str) -> str:
        s = s.split()
        s = s[::-1]
        return ' '.join(s)


# Add this block to run the code locally in VS Code
if __name__ == "__main__":
    solver = Solution()
    # Replace with the test cases from the LeetCode problem
    result = solver.reverseWords('the sky is blue')
    print(f"Output: {result}")

    result = solver.reverseWords('a good   example')
    print(f"Output: {result}")

    result = solver.reverseWords('  hello world  ')
    print(f"Output: {result}")