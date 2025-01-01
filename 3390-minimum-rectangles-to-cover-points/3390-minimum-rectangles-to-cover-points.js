/**
 * @param {number[][]} points
 * @param {number} w
 * @return {number}
 */
var minRectanglesToCoverPoints = function(points, w) {
    let arr = [];
    for(let i=0; i<points.length; i++){
        arr.push(points[i][0]);
    }
    arr.sort((a, b) => a-b);
    let cnt = 1, min = arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i] - min > w){
            min = arr[i];
            cnt++;
        }
    }
    return cnt;
};