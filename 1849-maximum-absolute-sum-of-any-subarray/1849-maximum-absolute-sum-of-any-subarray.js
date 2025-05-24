/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function(nums) {
    let minSum = maxSum = curSum = absSum = 0;
    for(let i=0; i<nums.length; i++){
        curSum += nums[i];
        maxSum = Math.max(maxSum, curSum);
        minSum = Math.min(minSum, curSum);
        absSum = Math.max(absSum, Math.abs(maxSum-minSum));
    }
    return absSum;
};