/**
 * @param {number[]} prizePositions
 * @param {number} k
 * @return {number}
 */
var maximizeWin = function(prizePositions, k) {
    const len = prizePositions.length;
    const dp = new Array(len+1).fill(0);
    let res = 0, start = 0;
    for(let i=0; i<len; i++){
        while(prizePositions[i]-prizePositions[start] > k) start++;
        const curPrize = i-start+1;
        dp[i+1] = Math.max(dp[i], curPrize);
        res = Math.max(res, curPrize+dp[start]);
    }
    return res;
};