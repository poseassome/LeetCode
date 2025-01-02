/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumOperations = function(grid) {
    let res = 0;
    for(let i=0; i<grid[0].length; i++){
        let p = grid[0][i];
        for(let j=1; j<grid.length; j++){
            if(grid[j][i] <= p){
                res += (p-grid[j][i])+1;
                p++;
            } else p = grid[j][i];
        }
    }
    return res;
};