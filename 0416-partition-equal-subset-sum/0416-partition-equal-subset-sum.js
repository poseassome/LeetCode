/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const sum = nums.reduce((a,b) => a+b);
    if(sum%2 === 1) return false;
    const target = sum/2;
    const arr = new Array(target+1).fill(0);
    for(let i=0; i<nums.length; i++){
        for(let j=target; j>=nums[i]; j--){
            arr[j] = Math.max(arr[j], arr[j-nums[i]]+nums[i]);
        }
    }
    return arr[target] === target;
};