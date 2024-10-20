/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function(arr, mat) {
    let n = mat.length, m = mat[0].length, map = new Map();
    let cntRow = new Array(n).fill(m), cntCol = new Array(m).fill(n);
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            map.set(mat[i][j], [i, j]);
        }
    }
    for(let k=0; k<arr.length; k++){
        const [i, j] = map.get(arr[k]);
        if(--cntRow[i] === 0 || --cntCol[j] === 0) return k;
    }
};