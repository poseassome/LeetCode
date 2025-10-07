/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    const m = matrix.length, n = matrix[0].length;
    let max = 0;
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            matrix[i][j] = parseInt(matrix[i][j]);
            if(matrix[i][j] > 0 && i > 0 && j > 0) matrix[i][j] = Math.min(matrix[i-1][j], matrix[i][j-1], matrix[i-1][j-1])+1;
            max = Math.max(matrix[i][j], max);
        }
    }
    return max**2;
};