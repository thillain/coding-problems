class Solution:
    def climbStairs(self, n: int) -> int:

        if n == 1 :
            return 1
        if n == 2 :
            return 2

        first = 1
        second = 2
        
        for x in range(3, n + 1):
            current = first + second
            first = second
            second = current
        
        return second

# Add this block to run the code locally in VS Code
if __name__ == "__main__":
    solver = Solution()
    # Replace with the test cases from the LeetCode problem
    result = solver.climbStairs(2)
    print(f"Output: {result}")

    result = solver.climbStairs(3)
    print(f"Output: {result}")

    result = solver.climbStairs(5)
    print(f"Output: {result}")