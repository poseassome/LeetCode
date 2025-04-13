/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function(n) {
    const DP = new Array(n+1).fill(0).map(() => new Array(n+1).fill(0));
    const calculateCost = (start, end) => {
        if(start >= end) return 0;
        if(DP[start][end] !== 0) return DP[start][end];
        let minCost = Infinity;
        for(let i=Math.floor((start+end)/2); i<=end; i++){
            const cost = i + Math.max(calculateCost(start, i-1), calculateCost(i+1, end));
            minCost = Math.min(minCost, cost);
        }
        DP[start][end] = minCost;
        return minCost;
    }
    return calculateCost(1, n);
};