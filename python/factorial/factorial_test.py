
import pytest
from factorial_solution import Solution

sol = Solution()
factorial = sol.factorial


def test_basic():
    assert factorial(4) == 24
