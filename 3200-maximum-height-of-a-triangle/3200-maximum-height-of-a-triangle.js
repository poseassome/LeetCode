/**
 * @param {number} red
 * @param {number} blue
 * @return {number}
 */
var maxHeightOfTriangle = function(red, blue) {
    const getHeight = (odd, even, balls) => {
        odd -= balls%2 ? balls : 0;
        even -= balls%2 ? 0 : balls;
        if(odd < 0 || even < 0) return 0;
        return 1+getHeight(odd, even, balls+1);
    }
    return Math.max(getHeight(red, blue, 1), getHeight(blue, red, 1));
};