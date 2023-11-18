/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function(mat, target) {
    const check = new Array(4).fill(true), len = mat.length;
    for(let i=0; i<len; i++){
        for(let j=0; j<len; j++){
            if(mat[i][j] !== target[i][j]) check[0] = false;
            if(mat[i][j] !== target[len-j-1][i]) check[1] = false;
            if(mat[i][j] !== target[len-i-1][len-j-1]) check[2] = false;
            if(mat[i][j] !== target[j][len-i-1]) check[3] = false;
        }
    }
    return check[0] || check[1] || check[2] || check[3];
};