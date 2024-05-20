/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    let maxRow = [], maxCol = [];
    for(const row of grid){
        maxRow.push(Math.max(...row));
    }
    for(let i=0; i<grid[0].length; i++){
        let temp = grid[0][i];
        for(let j=0; j<grid.length; j++){
            temp = Math.max(temp, grid[j][i]);
        }
        maxCol.push(temp);
    }
    
    let res = 0;
    for(let i=0; i<grid[0].length; i++){
        for(let j=0; j<grid[i].length; j++){
            res += Math.min(maxRow[i], maxCol[j]) - grid[i][j];
        }
    }
    return res;
};