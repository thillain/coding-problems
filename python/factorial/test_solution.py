
import pytest
from solution import Solution

sol = Solution()
factorial = sol.factorial

def test_basic():
    assert factorial(4) == 24