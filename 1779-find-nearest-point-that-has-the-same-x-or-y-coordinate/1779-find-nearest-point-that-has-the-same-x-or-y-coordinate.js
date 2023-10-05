/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
    let min = Infinity, res = -1, diff = 0;
    for(let i=0; i<points.length; i++){
        if(points[i][0] === x || points[i][1] === y){
            diff = Math.abs(x-points[i][0]) + Math.abs(y-points[i][1]);
            if(diff < min){
                min = diff;
                res = i;
            }
        }
    }
    return res;
};