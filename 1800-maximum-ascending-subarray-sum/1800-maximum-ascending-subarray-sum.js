/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    let max = nums[0];
    let sum = nums[0];
    for(let i=1; i<nums.length; i++){
        const num = nums[i];
        if(num <= nums[i-1]) sum = 0;
        sum += num;
        max = Math.max(max, sum);
    }
    return max;
};