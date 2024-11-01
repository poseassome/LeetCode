/**
 * @param {number[]} nums
 * @return {number}
 */
var findValueOfPartition = function(nums) {
    let res = Infinity;
    nums.sort((a,b) => a-b);
    for(let i=0; i<nums.length-1; i++){
        res = Math.min(nums[i+1]-nums[i], res);
    }
    return res;
};