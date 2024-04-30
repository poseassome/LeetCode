/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function(nums) {
    const sum = nums.shift();
    nums.sort((a,b) => a-b);
    return sum+nums[0]+nums[1];
};