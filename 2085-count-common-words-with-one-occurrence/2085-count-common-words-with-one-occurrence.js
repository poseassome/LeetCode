/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
    let cnt = 0;
    const sH1 = new Map();
    const sH2 = new Map();
    for(const x of words1){
        sH1.set(x, sH1.get(x)+1 || 1);
    }
    for(const x of words2){
        sH2.set(x, sH2.get(x)+1 || 1);
    }
    
    for(let x of words1){
        if(sH1.get(x) === 1 && sH2.get(x) === 1) cnt++;
    }
    return cnt;
};