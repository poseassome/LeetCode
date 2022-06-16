/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let stack = [];
    const Max = Math.max(word1.length, word2.length)
    word1 = word1.split('');
    word2 = word2.split('');
    for(let i=0; i<Max; i++){
        if(word1.length > 0) stack.push(word1.shift());
        if(word2.length > 0) stack.push(word2.shift());
    }
    return stack.join('');
};