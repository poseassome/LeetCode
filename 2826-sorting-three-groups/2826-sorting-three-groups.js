/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    const n = 3;
    const dp = new Array(n+1).fill(0);
    for(let i=0; i<nums.length; i++){
        const arr = [];
        let curNum = nums[i];
        for(let j=1; j<=curNum; j++){
            arr.push(dp[j]);
        }
        dp[curNum] = Math.max(...arr)+1;
    }
    return nums.length-Math.max(...dp);
};