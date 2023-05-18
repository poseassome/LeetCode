/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
    let str = word;
    let cnt = 0;
    while(sequence.includes(str)){
        str += word;
        cnt++;
    }
    return cnt;
};