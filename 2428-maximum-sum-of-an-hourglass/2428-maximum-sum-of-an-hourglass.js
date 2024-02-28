/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxSum = function(grid) {
    let res = -Infinity;
    for(let i=1; i<grid.length-1; i++){
        for(let j=1; j<grid[i].length-1; j++){
            const sum = grid[i-1][j-1]+grid[i-1][j]+grid[i-1][j+1]
                        +grid[i][j]
                        +grid[i+1][j-1]+grid[i+1][j]+grid[i+1][j+1];
            if(sum>res) res = sum;
        }
    }
    return res;
};