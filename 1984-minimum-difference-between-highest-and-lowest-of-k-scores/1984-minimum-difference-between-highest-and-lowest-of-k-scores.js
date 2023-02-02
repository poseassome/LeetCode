/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    nums.sort((a,b) => b-a);
    let min = Number.MAX_SAFE_INTEGER;
    for(let i=0; i<=nums.length-k; i++){
        min = Math.min(min, nums[i]-nums[i+k-1]);
    }
    return min;
};