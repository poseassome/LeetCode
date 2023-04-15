/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    s = s.split('').filter(el => !isNaN(el)).sort((a,b) => b-a);
    return new Set(s).size > 1 ? [...new Set(s)][1] : -1;
};