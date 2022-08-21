/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function(words, s) {
    let answer = 0;
    for(let i=0; i<words.length; i++) {
        if(s.startsWith(words[i])) answer++;
    }
    return answer;
};