/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(m, n, indices) {
    let arr = new Array(m).fill(0).map(el => new Array(n).fill(0));
    let odd = 0;
    for(let i=0; i<indices.length; i++){
        const [x, y] = indices[i];
        for(let j=0; j<n; j++){
            arr[x][j]++;
            if(arr[x][j]%2) odd++;
            else odd--;
        }
        for(let k=0; k<m; k++){
            arr[k][y]++;
            if(arr[k][y]%2) odd++;
            else odd--;
        }
    }
    return odd;
};