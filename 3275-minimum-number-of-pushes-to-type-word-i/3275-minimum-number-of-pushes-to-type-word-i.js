/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    let res = 0;
    for(let i=0; i<word.length; i++){
        res += Math.floor(i/8)+1;
    }
    return res;
};