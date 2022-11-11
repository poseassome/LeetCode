/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let sH = new Map();
    for(const x of s){
        sH.set(x, sH.get(x)+1 || 1);
    }
    const min = Math.min(...sH.values());
    const max = Math.max(...sH.values());
    if(min === max) return true;
    else return false;
};