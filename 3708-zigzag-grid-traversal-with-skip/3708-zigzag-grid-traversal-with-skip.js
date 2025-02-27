/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var zigzagTraversal = function(grid) {
    const m = grid.length, n = grid[0].length;
    let cnt = 0, res = [];
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(cnt%2 === 0){
                if(i%2 === 0) res.push(grid[i][j]);
                else res.push(grid[i][n-1-j]);
            }
            cnt++;
        }
    }
    return res;
};