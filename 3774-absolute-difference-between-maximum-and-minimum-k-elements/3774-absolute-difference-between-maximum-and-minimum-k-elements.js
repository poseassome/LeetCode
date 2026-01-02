/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var absDifference = function(nums, k) {
    nums.sort((a, b) => a - b);
    let res = 0;
    for(let i=0; i<k; i++){
        res += nums[nums.length-1 - i] - nums[i];
    }
    return res;
};