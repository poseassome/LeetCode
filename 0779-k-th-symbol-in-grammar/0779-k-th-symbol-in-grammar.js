/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function(n, k) {
    return ((k-1).toString(2).split('1').length-1)%2 ? 1 : 0;
};