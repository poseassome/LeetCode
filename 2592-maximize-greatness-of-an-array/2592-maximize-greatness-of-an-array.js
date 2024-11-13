/**
 * @param {number[]} nums
 * @return {number}
 */
var maximizeGreatness = function(nums) {
    nums.sort((a,b) => a-b);
    let i=0;
    for(let j=0; j<nums.length; j++){
        if(nums[i]<nums[j]) i++;
    }
    return i;
};