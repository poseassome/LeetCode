/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    const rowLength = grid.length, colLength = grid[0].length;
    let cnt = 0;
    const DFS = (row, col) => {
        if(row < 0 || row >= rowLength || col < 0 || col >= colLength) return false;
        if(grid[row][col] === 1) return true;
        grid[row][col] = 1;
        let isClosed = true;
        isClosed = DFS(row+1, col) && isClosed;
        isClosed = DFS(row-1, col) && isClosed;
        isClosed = DFS(row, col+1) && isClosed;
        isClosed = DFS(row, col-1) && isClosed;
        return isClosed;
    }
    for(let row=0; row<rowLength; row++){
        for(let col=0; col<colLength; col++){
            if(grid[row][col] === 0){
                if(DFS(row, col)) cnt++;
            } 
        }
    }
    return cnt;
};