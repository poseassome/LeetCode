/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function(rowSum, colSum) {
    let m = rowSum.length, n = colSum.length;
    let matrix = Array.from({ length: m }, () => Array(n).fill(0));

    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            let val = Math.min(rowSum[i], colSum[j]);
            matrix[i][j] = val;
            rowSum[i] -= val;
            colSum[j] -= val;
        }
    }
    return matrix;
};