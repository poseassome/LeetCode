/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
    let res = 1, inc = 1, dec = 1;
    for(let i=1; i<nums.length; i++){
        if(nums[i-1] > nums[i]){
            dec++;
            inc = 1;
        } else if (nums[i-1] < nums[i]){
            dec = 1;
            inc++;
        } else {
            inc = 1;
            dec = 1;
        }
        res = Math.max(res, inc, dec);
    }
    return res;
};