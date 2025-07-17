/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function(nums) {
    const sum = nums.reduce((acc, cur) => acc+cur, 0);
    let left = 0, right = sum;
    let res = [];
    for(let i=0; i<nums.length; i++){
        right -= nums[i];
        res.push(nums[i]*i - left + right - nums[i]*(nums.length-i-1));
        left += nums[i];
    }
    return res;
};