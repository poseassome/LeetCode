/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    let arr = [];
    for(let i=0; i<nums[0].length; i++){
        if(nums.every(el => el.includes(nums[0][i]))) arr.push(nums[0][i]);
    }
    return arr.sort((a,b) => a-b);
};