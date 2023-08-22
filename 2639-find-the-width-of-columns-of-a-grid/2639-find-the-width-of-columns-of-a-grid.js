/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function(grid) {
    let res = [];
    for(let i=0; i<grid[0].length; i++){
        let max = 0;
        for(let j=0; j<grid.length; j++){
            max = Math.max(max, (grid[j][i]+'').length);
        }
        res.push(max);
    }
    return res;
};