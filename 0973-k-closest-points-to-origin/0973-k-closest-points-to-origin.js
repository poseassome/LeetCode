/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let map = new Map();
    for(let i=0; i<points.length; i++) {
        let point = points[i];
        let a = Math.abs(point[0]);
        let b = Math.abs(point[1]);
        let c = Math.sqrt((a*a) + (b*b));
        map.set(i, c);
    }

    let sortedMap = [...map.entries()].sort((a, b) => a[1] - b[1]);
    let res = [];
    for(let i=0; i<k; i++){
        let [idx, map] = sortedMap[i];
        res.push(points[idx]);
    }
    return res;
};