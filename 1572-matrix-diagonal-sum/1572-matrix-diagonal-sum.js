/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum = 0;
    let cnt = 0;
    let last = mat.length-1;

    for(let i=0; i<mat.length; i++){
        if(cnt !== last){
            sum+= mat[i][cnt];
            sum+= mat[i][last];
        }else{
            sum+= mat[i][cnt];
        }
        cnt++;
        last--;
    }
    return sum;
};