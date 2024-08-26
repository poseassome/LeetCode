/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    const dp = new Array(amount+1).fill(0);
    dp[0] = 1;
    for(const coin of coins){
        for(let val=1; val<=amount; val++){
            if(val >= coin) dp[val] += dp[val-coin];
        }
    }
    return dp[amount];
};