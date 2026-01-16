/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    const getDistance = (p1, p2) => {
        let dx = p1[0] - p2[0], dy = p1[1] - p2[1];
        return dx*dx + dy*dy;
    }
    
    let res = 0;
    for(let i=0; i<points.length; i++){
        let map = new Map();
        for(let j=0; j<points.length; j++) {
            if(i === j) continue;
            let distance = getDistance(points[i], points[j]);
            map.set(distance, (map.get(distance) || 0) + 1);
        }
        for(const val of map.values()){
            res += val * (val - 1);
        }
    }
    return res;
};