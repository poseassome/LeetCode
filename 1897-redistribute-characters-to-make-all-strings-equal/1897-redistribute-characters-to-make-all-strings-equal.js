/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
    const sH = new Map();
    for(const word of words.values()){
        for(const x of word){
            sH.set(x, (sH.get(x) || 0) +1);
        }
    }
    for(const num of sH.values()){
        if(num%words.length !== 0) return false;
    }
    return true;
};