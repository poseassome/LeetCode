/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
    const vectorOne = [points[2][0]-points[1][0], points[2][1]-points[1][1]];
    const vectorTwo = [points[1][0]-points[0][0], points[1][1]-points[0][1]];
    return (vectorOne[0] === 0 && vectorOne[1] === 0) && (vectorTwo[0] === 0 && vectorTwo[1] === 0) || (vectorOne[0]*vectorTwo[1] === vectorOne[1]*vectorTwo[0]) ? false : true;
};