/**
 * @param {string} word
 * @param {number} m
 * @return {number[]}
 */
var divisibilityArray = function(word, m) {
    let res = [], cur = 0;
    for(const x of word){
        cur = (cur*10 + (x-'0'))%m;
        res.push(cur == 0 ? 1 : 0);
    }
    return res;
};