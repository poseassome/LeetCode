/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function(arr, k) {
    const len = arr.length;
    const dp = new Array(len+1).fill(0);
    for(let i=1; i<=len; i++){
        let curMax = 0, curSum = 0;
        for(let j=1; j<=k && i-j>=0; j++){
            curMax = Math.max(curMax, arr[i-j]);
            curSum = Math.max(curSum, curMax*j + dp[i-j]);
        }
        dp[i] = curSum;
    }
    return dp[len];
};