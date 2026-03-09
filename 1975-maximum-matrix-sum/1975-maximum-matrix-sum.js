/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function(matrix) {
    let len = matrix.length;
    let min = Infinity;
    let total = 0;
    let negatives = 0;

    for(let i=0; i<len; i++){
        for(let j=0; j<len;j ++){
            min = Math.min(min,Math.abs(matrix[i][j]));
            total += Math.abs(matrix[i][j]);
            if(matrix[i][j] < 0) negatives++;
        }
    }
    if(negatives%2 === 0) return total;
    return total - (2*min);
};