/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function(matrix) {
    const map = new Map();
    for(const x of matrix){
        const key = x.map(el => x[0] ? 1-el : el).join(',');
        map.set(key, (map.get(key) || 0) + 1);
    }
    return Math.max(...map.values());
};