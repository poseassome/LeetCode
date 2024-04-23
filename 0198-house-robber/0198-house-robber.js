/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let sum1 = 0, sum2 = 0, sum3 = 0;
    for(let i=0; i<nums.length; i++){
        const maxSum = Math.max(nums[i]+sum2, nums[i]+sum3);
        sum3 = sum2;
        sum2 = sum1;
        sum1 = maxSum;
    }
    return Math.max(sum1, sum2, sum3);
};