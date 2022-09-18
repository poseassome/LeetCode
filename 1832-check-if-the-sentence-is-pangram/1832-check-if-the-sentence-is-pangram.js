/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let word = sentence.split("");
    word = [...new Set(word)];
    if(word.length === 26) return true;
    return false;
};