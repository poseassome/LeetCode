/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
    if(sentence[0] !== sentence[sentence.length-1]) return false;
    let i = 0;
    while(i < sentence.length){
        if(sentence[i] === ' ' && sentence[i-1] !== sentence[i+1]) return false;
        i++;
    }
    return true;
};