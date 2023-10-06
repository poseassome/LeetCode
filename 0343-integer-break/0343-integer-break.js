/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    const DP = new Array(n+1).fill(0);
    DP[2] = 1;
    for(let i=3; i<=n; i++){
        for(let j=1; j<i-1; j++){
            DP[i] = Math.max(DP[i], Math.max(DP[i-j]*j, j*(i-j)));
        }
    }
    return DP[n];
};