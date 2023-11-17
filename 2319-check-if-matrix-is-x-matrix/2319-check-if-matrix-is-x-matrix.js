/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function(grid) {
    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid.length; j++){
            if(i === j && (grid[i][j] === 0 || grid[i][grid.length-j-1] === 0)) return false;
            if(i !== j && grid[i][j] !== 0 && i!== grid.length-j-1) return false;
        }
    }
    return true;
};