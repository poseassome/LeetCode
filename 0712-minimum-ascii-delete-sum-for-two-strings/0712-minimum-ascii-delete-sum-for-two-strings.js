/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
    const m = s1.length, n = s2.length;
    const dp = Array(n+1).fill(0);

    for(let i=1; i<=n; i++){
        dp[i] = dp[i-1] + s2.charCodeAt(i-1);
    }

    for(let i=1; i<=m; i++){
        let prev = dp[0];
        dp[0] += s1.charCodeAt(i- 1);

        for(let j=1; j<=n; j++){
            const temp = dp[j];
            if(s1.charAt(i-1) === s2.charAt(j-1)) dp[j] = prev;
            else dp[j] = Math.min(dp[j] + s1.charCodeAt(i-1), dp[j-1] + s2.charCodeAt(j-1));
            prev = temp;
        }
    }

    return dp[n];
};