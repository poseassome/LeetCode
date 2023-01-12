/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function(s) {
    const zero = s.split('0').sort((a, b) => a < b ? 1 : -1);
    const one = s.split('1').sort((a, b) => a < b ? 1 : -1);
    return zero[0].length > one[0].length;
};