/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function(nums) {
    let sum = nums.reduce((acc, cur) => acc+cur);
    let cnt = 0, left = 0;
    for(let i=0; i<nums.length-1; i++){
        left += nums[i];
        let right = sum-left;
        if((left%2 === 0) === (right%2 === 0)) cnt++;
    }
    return cnt;
};