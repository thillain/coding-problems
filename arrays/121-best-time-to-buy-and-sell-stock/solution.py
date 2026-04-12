from typing import List


class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        minPrice = float('inf')
        maxProfit = 0

        for price in prices:
            if price < minPrice:
                minPrice = price
            elif (price - minPrice) > maxProfit:
                maxProfit = price - minPrice
        return maxProfit


if __name__ == "__main__":
    solver = Solution()
    # Replace with the test cases from the LeetCode problem
    result = solver.maxProfit([7, 1, 5, 3, 6, 4])
    print(f"Output: {result}")
    result = solver.maxProfit([7, 6, 4, 3, 1])
    print(f"Output: {result}")
