/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {
    let sH1 = new Map();
    let sH2 = new Map();
    for(const x of word1){
        sH1.set(x, sH1.get(x)+1 || 1);
    }
    for(const x of word2){
        sH2.set(x, sH2.get(x)+1 || 1);
    }
    
    for(const [key, val] of sH1){
        let num = sH2.get(key) || 0;
        if(Math.abs(val-num) > 3) return false;
    }
    for(const [key, val] of sH2){
        let num = sH1.get(key) || 0;
        if(Math.abs(val-num) > 3) return false;
    }
    return true;
};