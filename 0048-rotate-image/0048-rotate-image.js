/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const len = matrix.length;
    for(let i=0; i<len; i++){
        matrix.push([]);
        const lastIdx = matrix.length-1;
        const lastArr = matrix[lastIdx];
        for(let j=0; j<len; j++){
            const num = matrix[j][i];
            lastArr.unshift(num);
        }
    }
    matrix.splice(0, len);
};