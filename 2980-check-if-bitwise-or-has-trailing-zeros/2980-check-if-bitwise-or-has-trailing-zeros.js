/**
 * @param {number[]} nums
 * @return {boolean}
 */
var hasTrailingZeros = function(nums) {
    return nums.filter(el => el%2 === 0).length >= 2;
};