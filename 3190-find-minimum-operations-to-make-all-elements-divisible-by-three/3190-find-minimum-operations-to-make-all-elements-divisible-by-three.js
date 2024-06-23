/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    return nums.reduce((acc, cur) => acc += cur%3 ? 1 : 0, 0);
};