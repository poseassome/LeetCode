/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let stack = [];
    for(let i=0; i<nums.length; i++){
        if(nums[i] === 0) {
            stack.push(nums[i]);
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.push(...stack);
};