import pytest
from solution import two_sum

def test_basic():
    assert two_sum([2,7,11,15], 9) == [0,1]

def test_another_case():
    assert two_sum([3,2,4], 6) == [1,2]

def test_negative_numbers():
    assert two_sum([-1,-2,-3,-4,-5], -8) == [2,4]

if __name__ == "__main__":
    pytest.main()