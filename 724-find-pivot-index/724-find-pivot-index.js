/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sum = nums.reduce((acc,cur,idx) => (acc+cur), 0);
    let currsum = 0;
    for(let i=0; i<nums.length; i++){
        if((sum-nums[i])/2 ===currsum) return i;
        currsum += nums[i];
    }
    return -1;
};