function missingNumber(nums) {

    let res = nums.length;

    for (let x = 0; x < nums.length; x++) {
        res = res ^ (x ^ (nums[x]));
    }

    return res;
}

module.exports = { missingNumber };