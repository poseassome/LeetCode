/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {
    const m = grid.length, n = grid[0].length;
    const mMap = {}, nMap = {};
    let cnt = 0;
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(grid[i][j]){
                mMap[`${i}`] = mMap[`${i}`] ? mMap[`${i}`]+1 : 1;
                nMap[`${j}`] = nMap[`${j}`] ? nMap[`${j}`]+1 : 1;
            }
        }
    }
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(grid[i][j] && (mMap[`${i}`]>1 || nMap[`${j}`]>1)) cnt++;
        }
    }
    return cnt;
};