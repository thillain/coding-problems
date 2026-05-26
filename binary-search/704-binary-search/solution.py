from typing import List


class Solution:
    def search(self, nums: List[int], target: int) -> int:
        left = 0
        right = len(nums) - 1

        while left <= right:
            mid = (left + right) // 2

            if nums[mid] == target:
                return mid
            elif nums[mid] < target:
                left = mid + 1
            else:
                right = mid - 1

        return -1


    # Add this block to run the code locally in VS Code
if __name__ == "__main__":
    solver = Solution()
    # Replace with the test cases from the LeetCode problem
    result = solver.search([-1, 0, 3, 5, 9, 12], 9)
    print(f"Output: {result}")
    result = solver.search([-1, 0, 3, 5, 9, 12], 2)
    print(f"Output: {result}")
