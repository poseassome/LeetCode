/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    const rowCounts = new Map();
    let res = 0;
    for (const row of grid) {
        const key = row.join(',')
        rowCounts.set(key, (rowCounts.get(key) || 0)+1);
    }
    for (let i=0; i<grid[0].length; i++){
        const col = [];
        for(let j=0; j< grid.length; j++) {
            col.push(grid[j][i]);
        }
        const colKey = col.join(',');
        res += rowCounts.get(colKey) || 0;
    }
    return res;
};