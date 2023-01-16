/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    return Math.abs(nums.reduce((acc, cur) => acc+cur) - nums.join('').split('').reduce((acc, cur) => Number(acc)+Number(cur)));
};