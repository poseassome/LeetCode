/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
    const map = {};
    let max = 0;
    for(const row of wall){
        let sum = 0;
        for(let i=0; i<row.length-1; i++){
            sum += row[i];
            map[sum] = map[sum]+1 || 1;
            max = Math.max(max, map[sum]);
        }
    }
    return wall.length-max;
};