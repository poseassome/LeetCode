/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {
    let arr = [0, 0];
    mat.forEach((el, idx) => {
        const cnt = el.reduce((a,b) => a+b, 0);
        if(cnt>arr[1]){
            arr[0] = idx;
            arr[1] = cnt;
        }
    })
    return arr;
};