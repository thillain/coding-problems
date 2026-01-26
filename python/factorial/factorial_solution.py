class Solution:
    def factorial(self, number):
        product = 1

        for i in range(1, number + 1):
            product = product * i
        return product
