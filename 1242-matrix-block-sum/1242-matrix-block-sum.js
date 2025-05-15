/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function(mat, k) {
    let arr = [], n = mat.length, m = mat[0].length;
    let sum;
    let res = [], ar = [];
    for(let i=0; i<n; i++){
        ar = [];
        for(let j=0; j<m; j++){
            arr[0] = Math.max(0, i-k);
            arr[1] = Math.min(n-1, i+k);
            arr[2] = Math.max(0, j-k);
            arr[3] = Math.min(m-1, j+k);
            sum = 0;
            for(let a=arr[0]; a<=arr[1]; a++){
                for(let b=arr[2]; b<=arr[3]; b++){
                    sum += mat[a][b];
                }
            }
            ar.push(sum);
        }
        res.push(ar);
    }
    return res;
};