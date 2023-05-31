/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function(nums) {
    let remove = false;
    for(let i=1; i<nums.length; i++){
        if(nums[i] <= nums[i-1]){
            if(remove) return false;
            if(i>1 && nums[i] <= nums[i-2]) nums[i] = nums[i-1];
            remove = true;
        }
    }
    return true;
};