/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
    let string = '';
    for(let i=0; i<words.length; i++){
        if(string.length > s) return false;
        string += words[i];
        if(s === string) return true;
    }
    return false;
};