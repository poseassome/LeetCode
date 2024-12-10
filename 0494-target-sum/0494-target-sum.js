/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let sum = 0;
    const DFS = (sum, nums, target, idx) => {
        if(idx === nums.length) return sum === target ? 1 : 0;
        else if(idx < nums.length){
            const left = sum + nums[idx];
            const right = sum - nums[idx];
            return DFS(left, nums, target, idx+1) + DFS(right, nums, target, idx+1);
        }
    }
    return DFS(sum, nums, target, 0);
};