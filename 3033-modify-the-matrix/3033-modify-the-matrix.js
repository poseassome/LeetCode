/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var modifiedMatrix = function(matrix) {
    let m = matrix.length, n = matrix[0].length;
    for(let i=0; i<n; i++){
        let max = 0;
        for(let j=0; j<m; j++){
            max = Math.max(max, matrix[j][i]);
        }
        for(let j=0; j<m; j++){
            if(matrix[j][i] === -1) matrix[j][i] = max;
        }
    }
    return matrix;
};