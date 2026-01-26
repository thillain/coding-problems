import pytest
from palindrome_solution import Solution

sol = Solution()


def test_basic():
    assert sol.isPalindrome(191) == True
    assert sol.isPalindrome(1) == True
    assert sol.isPalindrome(-191) == False
