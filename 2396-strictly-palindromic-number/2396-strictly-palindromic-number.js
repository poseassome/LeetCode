/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function(n) {
    for(let i=2; i<=n-2; i++){
        if(n.toString(i).toString() === n.toString(i).toString().split('').reverse().join('')) continue;
        else return false;
    }
    return true;
};