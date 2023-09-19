/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function(nums, k) {
    let sum = 0;
    for(let i=0; i<nums.length; i++){
        if(i.toString(2).split('').filter(el => el === '1').length === k) sum += nums[i];
    }
    return sum;
};