/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {

  let res = nums.length;

  for (let x = 0; x < nums.length; x++) {

    res = res ^ (x ^ nums[x])

  }
  return res;

  // const len = nums.length;
  // const expectedSum =(len*(len+1))/2;

  // const actualSum = nums.reduce((acc, curr) => acc+curr, 0);

  // return expectedSum-actualSum;
};

console.log(missingNumber([3, 0, 1]));