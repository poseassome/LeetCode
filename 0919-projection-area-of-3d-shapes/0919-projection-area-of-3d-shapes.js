/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
    let front = 0, side = 0, top = 0;
    for(let i=0; i<grid.length; i++){
        let a = 0, b = 0;
        for(let j=0; j<grid.length; j++){
            if(grid[i][j] > 0) top++;
            a = Math.max(a, grid[j][i]);
            b = Math.max(b, grid[i][j]);
        }
        front += a;
        side += b;
    }
    return front+side+top;
};