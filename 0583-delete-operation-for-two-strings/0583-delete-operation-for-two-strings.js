/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const len1 = word1.length, len2 = word2.length;
    const dp = Array(len1+1).fill('').map(el => Array(len2+1).fill(0));
    for(let i=1; i<=len1; i++){
        for(let j=1; j<=len2; j++){
            dp[i][j] = word1[i-1] === word2[j-1] ?
            dp[i-1][j-1] + 1
            : Math.max(dp[i-1][j], dp[i][j-1]);

        }
    }
    return len1+len2 - 2*dp[len1][len2];
};