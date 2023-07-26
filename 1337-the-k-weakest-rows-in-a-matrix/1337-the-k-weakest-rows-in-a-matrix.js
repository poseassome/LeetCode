/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    return mat.map((el, idx) => {
        let cnt = 0;
        for(const val of el){
            if(val) cnt++;
        }
        return [idx, cnt];
    })
        .sort((a, b) => a[1] - b[1])
        .slice(0, k)
        .map(el => el[0]);
};