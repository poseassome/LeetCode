/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function(word) {
    return new Set(word.replace(/[a-z]/g, ' ').split(' ').filter(el => el.length > 0).map(el => BigInt(el))).size;
};