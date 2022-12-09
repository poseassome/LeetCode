/**
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function(word) {
    const vowel = ['a', 'e', 'i', 'o', 'u']
    let sH = new Map();
    let cnt = 0;
    for(let i=0; i<word.length; i++){
        sH.clear();
        for(let j=i; j<word.length && vowel.includes(word[j]); j++){
            sH.set(word[j], (sH.get(word[j]) || 0) + 1);
            if(sH.size === 5) cnt++;
        }
    }
    return cnt;
};