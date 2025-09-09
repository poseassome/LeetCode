/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let dp = {};
    let cols = obstacleGrid[0].length-1;
    let rows = obstacleGrid.length-1;

    const paths = (row, col) => {
        if(dp[`${row}-${col}`]) return dp[`${row}-${col}`];
        if(row > rows || col > cols) return 0;
        if(obstacleGrid[row][col] === 1) return 0;
        if(row === rows && col === cols) return 1;
        return dp[`${row}-${col}`] = paths(row,col+1) + paths(row+1,col);
    }
    return paths(0,0);
};