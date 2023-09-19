/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    let start = nums.indexOf(1);
    for(let i=start+1; i<nums.length; i++){
        if(nums[i] === 1){
            if(i-start <= k) return false;
            start = i;
        }
    }
    return true;
};