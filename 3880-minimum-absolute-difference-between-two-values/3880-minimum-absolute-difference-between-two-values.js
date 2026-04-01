/**
 * @param {number[]} nums
 * @return {number}
 */
var minAbsoluteDifference = function(nums) {
    let diff = Infinity;
    let last = -1;
    for(let i=0; i<nums.length; i++){
        if(nums[i] !== 0){
            if(last !== -1 && nums[last] !== nums[i]) diff = Math.min(diff, i-last);
            last = i;
        }
    }
    return diff === Infinity ? -1 : diff;
};