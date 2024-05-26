/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
    return nums.every((el, idx) => el%2 !== nums[idx+1]%2);
};