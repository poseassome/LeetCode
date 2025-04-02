/**
 * @param {number[]} cost
 * @return {number[]}
 */
var minCosts = function(cost) {
    for(let i=1; i<cost.length; i++){
        cost[i] = Math.min(...cost.slice(0, i+1));
    }
    return cost;
};