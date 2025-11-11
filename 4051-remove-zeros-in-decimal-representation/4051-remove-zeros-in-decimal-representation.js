/**
 * @param {number} n
 * @return {number}
 */
var removeZeros = function(n) {
    return +("" + n).replaceAll("0", "");
};