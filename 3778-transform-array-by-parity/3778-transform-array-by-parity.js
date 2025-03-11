/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
    return nums.map(el => el%2 === 0 ? 0 : 1).sort();
};