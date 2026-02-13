/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function(nums) {
    let len = nums.length;
    let stack = [];

    for(let i=0; i<len; i++){
        if(stack.length === 0 || nums[stack[stack.length-1]] > nums[i]) stack.push(i);
    }

    let maxWidth = 0;
    for(let i=len-1; i>=0; i--){
        while(stack.length > 0 && nums[stack[stack.length-1]] <= nums[i]) maxWidth = Math.max(maxWidth, i-stack.pop());
    }
    return maxWidth;
};