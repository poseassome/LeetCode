/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let left = null, right = null;
    let stack = [0];
    for(let i=1; i<nums.length; i++){
        if(nums[i] < nums[stack[stack.length - 1]]){
            if(left === null) left = stack.length-1;
            while(nums[stack[left]] > nums[i]){
                left--;
            }
            right = i;
        } else stack.push(i);
    }
    return right ? right-stack[left+1]+1 : 0;
};