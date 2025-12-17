/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function(grid) {
    const flipRow = (grid, row) => {
        for(let i=0; i<grid[0].length; i++){
            grid[row][i] = grid[row][i] === 0 ? 1 : 0;
        }
    }
    const flipCol = (grid, col) => {
        for(let i=0; i<grid.length; i++){
            grid[i][col] = grid[i][col] === 0 ? 1 : 0;
        }
    }
    const colArr = new Array(grid[0].length).fill(0);
    for(let i=0; i<grid.length; i++){
        if(grid[i][0] === 0) flipRow(grid, i);
        for(let j=0; j<grid[0].length; j++){
            if(grid[i][j] === 1) colArr[j]++;
        }
    }
    for(let i=1; i<grid[0].length; i++){
        if(colArr[i] <= parseInt(grid.length/2)) flipCol(grid, i);
    }
    let res = 0;
    for(let i=0; i<grid.length; i++){
        let sum = 0;
        for(let j=0; j< grid[0].length; j++){
            if(grid[i][j] === 1) sum += Math.pow(2, grid[0].length-j-1);
        }
        res += sum;
    }
    return res;
};