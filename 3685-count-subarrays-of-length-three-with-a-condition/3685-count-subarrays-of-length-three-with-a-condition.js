/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function(nums) {
    let res = 0;
    for(let i=0; i<nums.length-1; i++){
        if(2*(nums[i]+nums[i+2]) === nums[i+1]) res++;
    }
    return res;
};