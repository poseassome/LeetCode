/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    let stack = [];
    let num = -Infinity;
    for(let i=nums.length-1; i>=0; i--){
        if(nums[i] < num) return true;
        while(stack.length && stack[stack.length-1]<nums[i]) num = stack.pop();
        stack.push(nums[i]);
    }
    return false;
};