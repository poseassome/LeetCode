/**
 * @param {number[][]} grid
 * @param {number} x
 * @param {number} y
 * @param {number} k
 * @return {number[][]}
 */
var reverseSubmatrix = function(grid, x, y, k) {
    const n = grid.length, m = grid[0].length;
    let startRow = x;
    let startCol = y;
    let endRow = x+k-1;
    let endCol = y+k-1;
    while(startRow < endRow){
        for (let i=startCol; i<=endCol; i++) {
            [grid[startRow][i], grid[endRow][i]] = [grid[endRow][i], grid[startRow][i]];
        }
        startRow++;
        endRow--;
    }
    return grid;
};