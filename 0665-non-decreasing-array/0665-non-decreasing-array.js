/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let cnt = 0;
    for(let i=1; i<nums.length; i++){
        if(nums[i] < nums[i-1]) cnt++;
        if(i >= 2 && nums[i] < nums[i-1] && nums[i] < nums[i-2]) nums[i] = Math.max(nums[i-1], nums[i-2]);
    }
    return cnt <= 1;
};