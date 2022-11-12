/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    nums.sort((a,b) => b-a);
    for(const x of nums){
        if(nums.includes(-x)) return x
    }
    return -1;
};