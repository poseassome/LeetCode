/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    return words.filter(w => !w.replace(/[qwertyuiop]/gi, '') || !w.replace(/[asdfghjkl]/gi, '') || !w.replace(/[zxcvbnm]/gi, ''));
};