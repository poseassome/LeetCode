/**
 * @param {number[]} nums
 * @return {number}
 */
var subarraySum = function(nums) {
    let res = 0;
    for(let i=0; i<nums.length; i++){
        const start = Math.max(0, i-nums[i]);
        for(let j=start; j<=i; j++){
            res += nums[j];
        }
    }
    return res;
};