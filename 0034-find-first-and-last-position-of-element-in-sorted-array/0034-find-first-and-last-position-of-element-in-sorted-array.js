/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let start = -1, end = -1;
    for(let i=0; i<nums.length; i++){
        if(nums[i] === target){
            if(start === -1){
                start = i;
                end = i;
            } else end++;
        }
    }
    return [start, end];
};