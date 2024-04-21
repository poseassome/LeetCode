/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[0].length; j++){
            const top = i-1 >= 0 ? grid[i-1][j] : Infinity;
            const left = j-1 >= 0 ? grid[i][j-1] : Infinity;
            grid[i][j] += !i && !j ? 0 : Math.min(top, left);
        }
    }
    return grid[grid.length-1][grid[0].length-1];
};