/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(let i=0; i<nums.length-2;){
        if(nums[i] === nums[i+2]) nums.splice(i, 1);
        else i++;
    }
    nums.length;
};