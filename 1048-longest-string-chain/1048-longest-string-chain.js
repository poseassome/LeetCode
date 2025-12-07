/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    words.sort((a, b) => a.length - b.length);
    let dp = new Map();
    for(const x of words) {
        dp.set(x, 1);
    }
    let res = 1;
    for(const x of words) {
        for(let i=0; i<x.length; i++){
            let prevWord = x.slice(0, i) + x.slice(i + 1);
            if (dp.has(prevWord)){
                dp.set(x, Math.max(dp.get(x), dp.get(prevWord)+1));
                res = Math.max(res, dp.get(x));
            }
        }
    }
    return res;
};