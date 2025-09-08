/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let set = new Set(nums);
    return set.size === 1 ? 0 : 1;
};