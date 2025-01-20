/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function(nums) {
    const len = nums.length;
    let sum = nums.reduce((acc, cur) => acc+cur, 0);
    let F = nums.reduce((acc, cur, i) => acc+i*cur, 0);
    let max = F;
    for(let i=1; i<len; i++){
        F += sum - len * nums[len-i];
        max = Math.max(max, F);
    }
    return max;
};