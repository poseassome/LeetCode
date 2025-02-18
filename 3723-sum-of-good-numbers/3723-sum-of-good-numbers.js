/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumOfGoodNumbers = function(nums, k) {
    let sum = 0;
    for(let i=0; i<nums.length; i++){
        if((nums[i-k] || -Infinity) < nums[i] && (nums[i+k] || -Infinity) < nums[i]) sum += nums[i];
    }
    return sum;
};