/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    // nums.sort((a,b) => b-a);
    let sum = 0, max = 0;
    for(let i=0; i<k; i++){
        sum += nums[i];
    }
    max = sum;
    for(let i=k; i<nums.length; i++){
        sum = sum-nums[i-k]+nums[i];
        max = Math.max(max, sum);
    }
    return max/k;
};