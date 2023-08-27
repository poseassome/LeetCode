/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    let cnt = 0;
    for(const row of mat){
        if(row.reduce((acc, cur) => acc+cur, 0) === 1){
            let idx = row.findIndex(el => el === 1);
            let colSum = 0;
            for(let i=0; i<mat.length; i++){
                if(mat[i][idx] === 1) colSum++;
            }
            if(colSum === 1) cnt++;
        }
    }
    return cnt;
};