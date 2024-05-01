/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let sum = 0, prev = 0;
    let min = Number.MAX_VALUE;
    for(let i=0; i<nums.length; i++){
        sum += nums[i];
        while(sum >= target){
            min = Math.min(min, i-prev+1);
            sum -= nums[prev];
            prev++;
        }
    }
    return min === Number.MAX_VALUE ? 0 : min;
};