/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    words.sort();
    const set = new Set(words);
    let res = '';
    for(const x of words){
        let isValid = true, key = '';
        for(let i=0; i<x.length-1; i++){
            key += x[i];
            if(!set.has(key)){
                isValid = false;
                break;
            }
        }
        if(isValid && x.length > res.length) res = x;
    }
    return res;
};