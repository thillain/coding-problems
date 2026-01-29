import pytest
from roman_to_integer_solution import Solution

sol = Solution()


def test_basic():
    assert sol.romanToInt('III') == 3
    assert sol.romanToInt('LVIII') == 58