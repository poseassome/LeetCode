/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    return [...new Set(word)].reduce((acc, cur) => acc + (cur === cur.toLowerCase() && word.indexOf(cur.toUpperCase()) >= 0), 0);
};