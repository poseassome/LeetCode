/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const val = image[sr][sc];
    if(val === color) return image;
    const row = image.length, col = image[0].length;
    const fill = (i, j) => {
        if(i < 0 || j < 0 || i === row || j === col || image[i][j] !== val) return;
        image[i][j] = color;
        fill(i+1, j);
        fill(i-1, j);
        fill(i, j+1);
        fill(i, j-1);
    }
    fill(sr, sc);
    return image; 
};