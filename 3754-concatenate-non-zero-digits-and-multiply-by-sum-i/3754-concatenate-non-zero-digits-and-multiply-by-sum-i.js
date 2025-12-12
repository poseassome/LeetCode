/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function(n) {
    if(n === 0) return 0;
    let arr = n.toString().split("").filter(el => el !== '0');
    let sum = arr.reduce((acc, cur) => parseInt(acc) + parseInt(cur), [0])
    let res = parseInt(arr.join(''))*sum;
    return res;
};