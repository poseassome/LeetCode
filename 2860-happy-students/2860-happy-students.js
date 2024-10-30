/**
 * @param {number[]} nums
 * @return {number}
 */
var countWays = function(nums) {
    let res = 0;
    nums.sort((a,b) => a-b);
    if(nums[0] !== 0) res++;
    for(let i=0; i<nums.length; i++){
        const len = i+1;
        const one = 1<nums.length-1 && len>nums[i] && len<nums[i+1];
        const two = i === nums.length-1 && len>nums[i];
        if(one || two) res++;
    }
    return res;
};