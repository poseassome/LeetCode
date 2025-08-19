/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isTrionic = function(nums) {
    let cnt = 0;
    for(let i=1; i<nums.length; i++){
        if((cnt === 0 || cnt === 1) && nums[i-1] < nums[i]) cnt = 1;
        else if((cnt === 1 || cnt === 2) && nums[i-1] > nums[i]) cnt = 2;
        else if((cnt === 2 || cnt === 3) && nums[i-1] < nums[i]) cnt = 3;
        else return false;
    }
    return cnt === 3;
};