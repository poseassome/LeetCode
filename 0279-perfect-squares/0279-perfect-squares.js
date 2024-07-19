/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    const DP = [0];
    for(let i=1; i<=n; i++){
        DP[i] = Number.MAX_VALUE;
        for(let j=1; j*j<=i; j++){
            DP[i] = Math.min(DP[i], DP[i-j*j]+1);
        }
    }
    return DP[n];
};