/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    const dis1 = Math.abs(z-x); 
    const dis2 = Math.abs(z-y);
    return dis1 < dis2 ? 1 : dis2 < dis1 ? 2 : 0;
};