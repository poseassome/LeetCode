/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
    const half = Math.floor(time/(n-1));
    const rest = time%(n-1);
    if(half%2 === 0) return rest+1;
    return n-rest;
};