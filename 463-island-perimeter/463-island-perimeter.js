/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let answer = 0;
    for(let i=0; i<grid.length; i++) {
        for(let j=0; j<grid[i].length; j++) {
            if(grid[i][j] === 1) {
                let n = [
                    grid[i][j+1] !== undefined ? grid[i][j+1] : 0, 
                    grid[i][j-1] !== undefined ? grid[i][j-1] : 0,
                    grid[i-1] !== undefined ? grid[i-1][j] : 0, 
                    grid[i+1] !== undefined ? grid[i+1][j] : 0];
                answer += 4-n.reduce((a, b) => a + b, 0);
            }
        }
    }
    return answer;
};