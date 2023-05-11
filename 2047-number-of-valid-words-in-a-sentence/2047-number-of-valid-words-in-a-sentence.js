/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function(sentence) {
    const reg = /^([a-z]+(-?[a-z]+)?)?(!|\.|,)?$/;
    sentence = sentence.trim().split(/\s+/);
    return sentence.reduce((acc, cur) => {
        if(reg.test(cur)) acc++;
        return acc;
    }, 0);
};