/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    const containsMap = new Map();
    for(let x of nums){

        if(containsMap.has(x)) {
            return true;
        }
        containsMap.set(x, 1);
    }
    return false;
};


console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicate([1,2,3,4]));