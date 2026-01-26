class Solution:
    def isPalindrome(self, number):
        reversed = 0
        original = number

        if number < 0:
            return False

        while number > 0:
            digit = number % 10
            reversed = reversed * 10 + digit
            number //= 10

        return original == reversed
