/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    let cnt = 0;
    for(let i=0; i<s.length-2; i++){
        const word = s.substring(i, i+3);
        if(new Set(word).size === 3) cnt++;
    }
    return cnt;
};