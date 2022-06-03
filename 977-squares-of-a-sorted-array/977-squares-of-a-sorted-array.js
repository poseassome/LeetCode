/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    return nums.map( val => val*val).sort((a,b) => a-b);
};