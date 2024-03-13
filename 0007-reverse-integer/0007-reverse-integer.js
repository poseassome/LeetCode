/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const sign = x<0 ? -1: 1;
    x = Math.abs(x).toString().split('').reverse().join('');
    return x>Math.pow(2, 31) ? 0 : sign*x;
};