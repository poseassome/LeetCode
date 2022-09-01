/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
    if(nums.length === 1) return 0;
    const max = Math.max(...nums);
    const min = Math.min(...nums);
    if(Math.sign(max-min-2*k) === -1 || max-min-2*k ===0) return 0
    else return max-2*k-min;
};