/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    const m = grid.length, n = grid[0].length, arr = grid.flat();
    while(k--){
        arr.unshift(arr.pop());
    }
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            grid[i][j] = arr.shift();
        }
    }
    return grid;
};