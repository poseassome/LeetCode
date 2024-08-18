/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    return nums.reduce((acc, cur) => acc+cur, 0) - nums.length*Math.min(...nums);
};