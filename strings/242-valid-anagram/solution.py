class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        
        if len(s) != len(t):
            return False

        wordDict = {}

        for char in s:

            wordDict[char] =  wordDict.get(char, 0) + 1 

        for char in t:

            if char not in wordDict:
                return False
            
            wordDict[char] = wordDict.get(char) - 1 
            # wordDict[char] -= 1  # No need for .get() here since we know it exists
            
            if  wordDict.get(char) == 0:
                del wordDict[char]

        return len(wordDict) == 0
     
# Add this block to run the code locally in VS Code
if __name__ == "__main__":
    solver = Solution()
    # Replace with the test cases from the LeetCode problem
    result = solver.isAnagram('car1','arc')
    print(f"Output: {result}")

    result = solver.isAnagram('anagram','nagaram')
    print(f"Output: {result}")

    result = solver.isAnagram('Thillai','Deepthi')
    print(f"Output: {result}")