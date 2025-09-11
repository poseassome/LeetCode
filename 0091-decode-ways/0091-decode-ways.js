/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if(s[0] === "0") return 0;
    const len = s.length;
    const dp = new Array(len+1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    for(let i=2; i<=len; i++){
        const cur = s[i-1];
        const prev = s[i-2];
        if(cur !== "0" && ((prev === "1") || (prev === "2" && cur <= "6"))) dp[i] = dp[i-1] + dp[i-2];
        else if(cur !== "0") dp[i] = dp[i-1];
        else if(prev === "1" || prev === "2") dp[i] = dp[i-2];
        else dp[i] = 0;
    }
    return dp[len];
};