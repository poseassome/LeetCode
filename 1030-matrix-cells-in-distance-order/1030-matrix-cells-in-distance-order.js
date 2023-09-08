/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function(rows, cols, rCenter, cCenter) {
    let distance = [], res = [];
    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            distance.push([i, j, Math.abs(i-rCenter)+Math.abs(j-cCenter)]);
        }
    }
    distance.sort((a,b) => a[2]-b[2]);
    for(let i=0; i<distance.length; i++){
        res.push([distance[i][0], distance[i][1]]);
    }
    return res;
};