/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    const map = new Map();
    let max = 0;
    for(const x of nums){
        map.set(x, (map.get(x)||0)+1);
        max = Math.max(max, x);
    }
    const dp = new Array(max + 1).fill(0);
    for(let i=1; i<=max; i++){
        const points = (map.get(i) || 0) * i;
        if(i === 1) dp[i] = points;
        else dp[i] = Math.max(dp[i-1], dp[i-2]+points);
    }
    return dp[max];
};