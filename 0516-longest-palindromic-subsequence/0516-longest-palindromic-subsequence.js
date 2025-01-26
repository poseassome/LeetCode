/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    if(!s.length) return 0;
    const len = s.length;
    const dp = Array.from(Array(len), () => Array(len).fill(0));
    for(let i=0; i<len; i++){
        dp[i][i] = 1;
    }
    for(let i=2; i<=len; i++){
        for(let j=0; j<=len-i; j++){
            let k = j+i-1;
            if(s[j] === s[k]) dp[j][k] = 2+dp[j+1][k-1];
            else dp[j][k] = Math.max(dp[j+1][k], dp[j][k-1]);
        }
    }
    return dp[0][len-1];
};