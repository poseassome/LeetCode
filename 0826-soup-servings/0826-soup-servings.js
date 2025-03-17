/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function(n) {
    const dp = (a, b, memo) => {
        if(a <= 0 && b <= 0) return 0.5;
        if(a <= 0) return 1.0;
        if(b <= 0)return 0.0;
        const key = [a, b].toString();
        if(memo.has(key)) return memo.get(key);
        const probability = 0.25 * (
            dp(a-4, b, memo)
            + dp(a-3, b-1, memo)
            + dp(a-2, b-2, memo)
            + dp(a-1, b-3, memo)
        );
        memo.set(key, probability);
        return probability;
    }
    if(n >= 4800) return 1.0;
    n = Math.floor((n+24)/25);
    let map = new Map();
    return dp(n, n, map);
};