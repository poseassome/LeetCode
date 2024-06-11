/**
 * @param {number[]} nums
 * @return {number}
 */
var maxOperations = function(nums) {
    let score = nums[0]+nums[1];
    let res = 1;
    for(let i=2; i<nums.length; i+=2){
        if(nums[i]+nums[i+1] === score) res++;
        else return res;
    }
    return res;
};