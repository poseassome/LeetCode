/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
    let m = img.length, n = img[0].length;
    let res = new Array(m);
    const getResult = (x, y) => {
        let cnt = 0, sum = 0;
        for(let i=-1; i<=1; i++){
            for(let j=-1; j<=1; j++){
                const nx = x + i;
                const ny = y + j;
                if(nx >= 0 && ny >= 0 && nx < m && ny < n){
                    sum += img[nx][ny];
                    cnt++;
                }
            }
        }
        const curResult = Math.floor(sum/cnt);
        return curResult;
    }

    for(let i=0; i<m; i++){
        res[i] = new Array(n).fill(0);
        for(let j=0; j<n; j++){
            res[i][j] = getResult(i, j);
        }
    }
    return res;
};