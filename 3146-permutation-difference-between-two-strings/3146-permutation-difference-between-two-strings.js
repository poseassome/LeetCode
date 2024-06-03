/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
    let res = 0;
    for(let i=0; i<s.length; i++){
        res += Math.abs(i - t.indexOf(s[i]));
    }
    return res;
};