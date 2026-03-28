from typing import List


class Solution:
    def missingNumber(self, nums: List[int]) -> int:

      n = len(nums)

      res = n

      for x in range(n):
         res = res ^ (x ^ nums[x])
      return res



        # Add this block to run the code locally in VS Code
if __name__ == "__main__":
    solver = Solution()
    # Replace with the test cases from the LeetCode problem
    result = solver.missingNumber([3,0,1])
    print(f"Output: {result}")