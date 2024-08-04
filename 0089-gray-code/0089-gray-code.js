/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    let len = Math.pow(2, n);
    let res = [];
    for(let i=0; i<len; i++){
        res.push(i^(i>>1));
    }
    return res;
};