/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    const n = matrix.length;
    const map = new Map();
    const DFS = (row, col) => {
        if(row === n) return 0;
        if(col < 0 || col >= n) return Infinity;
        if(map.has(`${row}/${col}`)) return map.get(`${row}/${col}`);

        const res = matrix[row][col] + Math.min(DFS(row+1, col-1), DFS(row+1, col), DFS(row+1, col+1));
        map.set(`${row}/${col}`, res);
        return res;
    }
    let res = Infinity;
    for(let i=0; i<n; i++) {
        res = Math.min(res, DFS(0, i));
    }
    return res;
};