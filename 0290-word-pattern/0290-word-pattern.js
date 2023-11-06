/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const words = s.split(" ");
    if(words.length !== pattern.length) return false;
    const patternMap = new Map(), wordsMap = new Map();
    
    for(let i=0; i<words.length; i++){
        const word = words[i], pat = pattern[i];
        if(patternMap.has(pat) && patternMap.get(pat) !== word) return false;
        if(wordsMap.has(word) && wordsMap.get(word) !== pat) return false;
        patternMap.set(pat, word);
        wordsMap.set(word, pat);
    }
    return true;
};