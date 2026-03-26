class Solution:
    def isPalindrome(self, s: str) -> bool:
        cleaned =  ''

        for x in s:
            if (x >= 'a' and x <= 'z') or (x >='A' and x <='Z') or (x >='0' and x <='9'):
                cleaned = cleaned +x.lower()
        return cleaned == cleaned[::-1]

        # Add this block to run the code locally in VS Code
if __name__ == "__main__":
    solver = Solution()
    # Replace with the test cases from the LeetCode problem
    result = solver.isPalindrome('A man, a plan, a canal: Panama')
    print(f"Output: {result}")

    result = solver.isPalindrome( " " )
    print(f"Output: {result}")

    result = solver.isPalindrome('race a car')
    print(f"Output: {result}")