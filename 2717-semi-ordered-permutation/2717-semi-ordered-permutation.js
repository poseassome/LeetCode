/**
 * @param {number[]} nums
 * @return {number}
 */
var semiOrderedPermutation = function(nums) {
    let min = 0, max = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] === 1) min = i;
        if(nums[i] === nums.length) max = i;
    }
    let result = min + (nums.length-max-1);
    return min < max ? result : result-1;
};