/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let max = Number.MIN_SAFE_INTEGER;
    for(const x of sentences){
        if(x.split(" ").length > max) max = x.split(" ").length;
    }
    return max;
};