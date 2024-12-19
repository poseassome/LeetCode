/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let res = [];
    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[i].length; j++){
            res.push(matrix[i][j]);
        }
    }
    res.sort((a,b) => a-b);
    return res[k-1];
};