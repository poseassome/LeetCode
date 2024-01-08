/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    points.sort((a,b) => a[0]-b[0]);
    let area = 0;
    for(let i=1; i<points.length; i++){
        area = Math.max(area, points[i][0]-points[i-1][0]);
    }
    return area;
};