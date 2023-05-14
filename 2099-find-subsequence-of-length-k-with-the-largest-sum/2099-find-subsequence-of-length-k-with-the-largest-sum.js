/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
    return nums.map((el, idx) => [el, idx]).sort((a, b) => a[0] - b[0]).slice(-k).sort((a, b) => a[1] - b[1]).map(el => el[0]);
};