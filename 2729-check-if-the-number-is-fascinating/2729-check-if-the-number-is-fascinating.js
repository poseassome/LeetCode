/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function(n) {
    const res = n+''+(2*n)+''+(3*n);
    if(res.indexOf('0') !== -1 || res.length !== 9) return false;
    return (new Set(res)).size === 9;
};