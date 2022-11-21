/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let minSum = Infinity;
    let sum = 0;
    for(let i=0; i<nums.length; i++) {
        sum += nums[i];
        minSum = Math.min(minSum, sum);
    }
    return minSum < 0 ? -minSum+1 : 1;
};