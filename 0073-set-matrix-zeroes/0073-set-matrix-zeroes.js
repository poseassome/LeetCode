/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const cols = new Set(), rows = new Set();
    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[0].length; j++){
            if(matrix[i][j] === 0){
                rows.add(i);
                cols.add(j);
            }
        }
    }
    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[0].length; j++){
            if(rows.has(i) || cols.has(j)){
                matrix[i][j] = 0;
            }
        }
    }
};