/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function(points, queries) {
    let res = [];
    for(const query of queries){
        let cnt = 0;
        for(const p of points){
            if(Math.pow((query[0]-p[0]), 2) + Math.pow((query[1]-p[1]), 2) <= Math.pow((query[2]), 2)) cnt++;
        }
        res.push(cnt);
    }
    return res;
};