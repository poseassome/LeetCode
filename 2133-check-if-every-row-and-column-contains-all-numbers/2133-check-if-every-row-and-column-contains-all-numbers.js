/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(matrix) {



    const n = matrix.length;
    const rows = Array(n).fill().map(_ => new Set());
    const cols = Array(n).fill().map(_ => new Set());
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            rows[i].add(matrix[i][j]);
            cols[j].add(matrix[i][j]);
        }
    }
    return rows.every(s => s.size === n) && cols.every(s => s.size === n);
};