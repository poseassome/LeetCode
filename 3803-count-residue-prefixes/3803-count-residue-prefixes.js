/**
 * @param {string} s
 * @return {number}
 */
var residuePrefixes = function(s) {
    const chars = new Set();
    let countPrefix = 0;
    for(let i=0; i<s.length; i++){
        chars.add(s[i]);
        if(chars.size > 2) break;
        countPrefix += chars.size === (i+1)%3;
    }
    return countPrefix;
};