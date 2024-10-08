/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    if(!nums.length) return 0;
    let up = 1, down = 1;
    for(let i=1; i<nums.length; i++){
        if(nums[i] < nums[i-1]) down = up+1;
        else if(nums[i] > nums[i-1]) up = down+1;
    }
    return Math.max(up, down);
};