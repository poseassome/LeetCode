/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumArea = function(grid) {
    let rows = [], cols = [];
    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[0].length; j++){
            if(grid[i][j] === 1){
                rows.push(i);
                cols.push(j);
            }     
        }
    }
    let height = Math.max(...rows) - Math.min(...rows) + 1;
    let width = Math.max(...cols) - Math.min(...cols) + 1;
    return height*width;
};