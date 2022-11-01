/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
    let cnt = 0;
    for(const x of patterns){
        if(word.includes(x)) cnt++;
    }
    return cnt;
};