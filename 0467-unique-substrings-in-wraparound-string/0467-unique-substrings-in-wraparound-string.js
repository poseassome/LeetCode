/**
 * @param {string} s
 * @return {number}
 */
var findSubstringInWraproundString = function(s) {
    const dp = new Array(26).fill(0);
    dp[s.charCodeAt(0) - 97] = 1;
    let cnt = 1;
    for(let i=1; i<s.length; i++){
        if((s.charCodeAt(i) - s.charCodeAt(i-1) === 1) || (s.charCodeAt(i) - s.charCodeAt(i-1) === -25)) cnt++;
        else cnt = 1;
        dp[s.charCodeAt(i) - 97] = Math.max(dp[s.charCodeAt(i)-97], cnt);
    }
    return dp.reduce((acc, cur) => acc+cur, 0);
};