/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if (n === 1) return true;
    let four = 4;
    while (four <= n) {
        if (four === n) return true;
        four *= 4;
    }
    return false;
};