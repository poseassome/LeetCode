/**
 * @param {number[][]} grid
 * @return {number}
 */
var findChampion = function(grid) {
    const sum = grid.map(el => el.reduce((a, b) => a+b, 0));
    return sum.indexOf(Math.max(...sum));
};