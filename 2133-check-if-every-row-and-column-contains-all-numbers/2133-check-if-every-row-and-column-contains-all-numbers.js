/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(matrix) {
    const rows = Array(matrix.length).fill().map(el => new Set());
    const cols = Array(matrix.length).fill().map(el => new Set());
    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix.length; j++){
            rows[i].add(matrix[i][j]);
            cols[j].add(matrix[i][j]);
        }
    }
    return rows.every(el => el.size === matrix.length) && cols.every(el => el.size === matrix.length)
};