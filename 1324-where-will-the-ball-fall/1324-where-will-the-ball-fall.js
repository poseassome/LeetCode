/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function(grid) {
    const m = grid.length, n = grid[0].length;
    const DFS = (i, j) => {
        if(i === m) return j;
        if(grid[i][j] === 1){
            j++;
            if(j >= n || grid[i][j] === -1) return -1;
        } else {
            j--;
            if(j < 0 || grid[i][j] === 1) return -1;
        }
        return DFS(i+1, j);
    }
    const arr = [];
    for (let i=0; i<n; i++) {
        arr.push(DFS(0, i));
    }
    return arr;
};