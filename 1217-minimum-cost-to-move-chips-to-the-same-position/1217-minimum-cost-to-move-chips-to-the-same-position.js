/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
    let odd = 0, even = 0;
    position.forEach(x => x%2 == 0 ? even++ : odd++);
    return Math.min(odd, even);
};