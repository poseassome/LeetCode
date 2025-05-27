/**
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minCuttingCost = function(n, m, k) {
    const max = Math.max(n, m);
    if(max <= k) return 0;
    const remainder = max%k;
    if (remainder === 0) return k*k;
    return remainder*k;
};