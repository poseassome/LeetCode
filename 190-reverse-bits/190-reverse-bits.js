/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    n = n.toString(2).split("");
    n.unshift(...new Array(32-n.length).fill(0));
        
    return parseInt(n.reverse().join(""), 2);
    return n;
};