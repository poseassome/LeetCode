/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let prev = 0, cur = 0;
    let res = 0;
    let zero = false;
    for(const x of nums){
        if(x === 1) cur++;
        else {
            zero = true;
            prev = cur;
            cur = 0;
        }
        res = Math.max(res, prev+cur);
    }
    return zero ? res : nums.length-1;
};