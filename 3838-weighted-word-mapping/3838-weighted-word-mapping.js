/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function(words, weights) {
    let res = "";
    for(const word of words){
        let total = 0;
        for(let x of word){
            const idx = x.charCodeAt(0) - 'a'.charCodeAt(0);
            total += weights[idx];
        }
        total %= 26;
        res += String.fromCharCode('a'.charCodeAt(0) + 25 - total);
    }
    return res;
};