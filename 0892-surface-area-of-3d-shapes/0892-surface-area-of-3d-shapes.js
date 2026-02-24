/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
    const height = grid.length; width = grid[0].length;

    let sum = 0;
    for(let i= 0; i<height; i++){
        for(let j=0; j<width; j++){
            if(grid[i][j] > 0) sum += grid[i][j]*4 + 2;
            if(i > 0) sum -= Math.min(grid[i][j], grid[i-1][j]) * 2;
            if(j > 0) sum -= Math.min(grid[i][j], grid[i][j-1]) * 2;
        }
    }
    return sum;
};