/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    return nums.map(el => Math.max(...nums)-el).reduce((a, b) => a+b);
};