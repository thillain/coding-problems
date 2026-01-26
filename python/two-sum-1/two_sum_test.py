import pytest
from two_sum_solution import Solution

sol = Solution()


def test_basic():
    assert sol.twoSum([2, 7, 11, 15], 9) == [0, 1]


def test_another_case():
    assert sol.twoSum([3, 2, 4], 6) == [1, 2]


def test_negative_numbers():
    assert sol.twoSum([-1, -2, -3, -4, -5], -8) == [2, 4]
