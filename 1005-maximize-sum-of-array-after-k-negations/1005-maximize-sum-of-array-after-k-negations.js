/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
    while(k>0){
        const min = Math.min(...nums);
        const i = nums.indexOf(min);
        nums[i] = nums[i]*-1;
        k--;
    }
    return nums.reduce((acc, cur) => acc+cur);
};