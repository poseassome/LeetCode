/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function(dimensions) {
    let maxDiagonal = 0;
    let maxArea = 0;

    for (const [w, l] of dimensions) {
        let diagonalLength = Math.sqrt(w*w + l*l);
        let area = w * l;
        if (diagonalLength > maxDiagonal) {
            maxDiagonal = diagonalLength;
            maxArea = area;
        } else if (diagonalLength === maxDiagonal) maxArea = Math.max(maxArea, area);
    }
    return maxArea;
};