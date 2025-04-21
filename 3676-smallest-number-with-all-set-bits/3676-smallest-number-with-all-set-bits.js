/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function(n) {
    return parseInt(n.toString(2).replaceAll('0', '1'), 2);
};