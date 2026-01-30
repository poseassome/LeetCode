/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    const m = mat.length, n = mat[0].length;
    if(m*n !== r*c) return mat;

    const ans = Array.from({ length: r }, () => Array(c));

    let row = 0, col = 0;
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            ans[row][col] = mat[i][j];
            col++;
            if(col === c) {
                col = 0;
                row++;
            }
        }
    }
    return ans;
};