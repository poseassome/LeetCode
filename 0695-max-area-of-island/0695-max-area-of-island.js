/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const DFS = (i, j, m, n, grid) => {
        if(i>=m || j>=n || i<0 || j<0 || grid[i][j] !== 1) return 0;
        grid[i][j] = 0;
        let cnt = 1;
        cnt += DFS(i+1, j, m, n, grid);
        cnt += DFS(i, j+1, m, n, grid);
        cnt += DFS(i, j-1, m, n, grid);
        cnt += DFS(i-1, j, m, n, grid);
        return cnt;
    }
    
    let max = 0;
    const m = grid.length, n = grid[0].length;
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(grid[i][j] === 1) max = Math.max(max, DFS(i, j, m, n, grid));
        }
    }
    return max;
};