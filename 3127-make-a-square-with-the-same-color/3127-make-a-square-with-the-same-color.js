/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var canMakeSquare = function(grid) {
    for(let i=0; i<grid.length-1; i++){
        for(let j=0; j<grid.length-1; j++){
            let arr = [grid[i][j], grid[i][j+1], grid[i+1][j+1], grid[i+1][j]];
            let Wcnt = arr.filter(el => el === 'W').length;
            let Bcnt = arr.filter(el => el === 'B').length;
            if([Wcnt, Bcnt].findIndex(el => el === 3 || el === 4) !== -1) return true;
        }
    }
    return false;
};