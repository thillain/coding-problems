from typing import List


class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        
        containsDict = {}

        for x in nums:
            if x in containsDict:
                return True
            containsDict[x] = 1
        return False

        # Add this block to run the code locally in VS Code
if __name__ == "__main__":
    solver = Solution()
    # Replace with the test cases from the LeetCode problem
    result = solver.containsDuplicate([1,2,3,1])
    print(f"Output: {result}")