/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
    while(k>0){
        const min = Math.min(...nums);
        const numIdx = nums.findIndex(el => el === min);
        const res = min * multiplier;
        nums[numIdx] = res;
        k--;
    }
    return nums;
};