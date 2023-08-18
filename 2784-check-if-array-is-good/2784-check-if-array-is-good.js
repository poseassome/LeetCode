/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {
    nums.sort((a,b) => a-b);
    const last = nums[nums.length-1];
    if(last+1 !== nums.length) return false;
    for(let i=0; i<last; i++){
        if(nums[i] !== i+1) return false;
    }
    return true;
};