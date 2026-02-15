class Solution:
    def romanToInt(self, s: str) -> int:
        romanDict = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }
        total = 0
        
        for index in range(len(s)):
            currentValue = romanDict[s[index]]
            nextValue = romanDict[s[index + 1]] if index + 1 < len(s) else 0
            
            if currentValue < nextValue:
                total -= currentValue
            else:
                total += currentValue
        
        return total
        
                                                       