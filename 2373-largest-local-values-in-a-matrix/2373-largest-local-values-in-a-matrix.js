/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
    const getLargest = (startRow, startCol) => {
        let max = -Infinity;
        for(let row=startRow-1; row<startRow+2; row++){
            for(let col=startCol-1; col<startCol+2; col++){
                const tile = grid[row][col];
                max = Math.max(max, tile);
            }
        }
        return max;
    }
    
    const len = grid.length, result = [];
    for(let row=1; row<len-1; row++){
        const arr = [];
        for(let col=1; col<len-1; col++){
            arr.push(getLargest(row, col))
        }
        result.push(arr);
    }
    return result;
};