/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function(poured, query_row, query_glass) {
    if(poured<1) return 0;
    let arr = [[poured]];
    const check = num => {
        let cond = num>1 ? num-1 : num ?? 0;
        return num>1 ? cond/2 : 0;
    }
    for(let i=1; i<query_row+1; i++){
        arr[i] = [];
        for(let j=0; j<i+1; j++){
            arr[i][j] = check(arr[i-1][j-1]) + check(arr[i-1][j]);
        }
    }
    const output = arr[query_row][query_glass];
    return output>=1 ? 1 : output;
};