/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let arr = [];
    if(n/2 !== Math.floor(n/2)) arr.push(0);
    for(let i=Math.floor(n/2); i>0; i--){
        arr.push(-i-1);
        arr.unshift(i+1);
    }
    return arr;
};