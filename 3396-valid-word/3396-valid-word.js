/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
    if(word.length<3) return false;
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let hasVowels = false, hasConsonant = false;
    for(const x of word){
        const code = x.charCodeAt(0)
        if((code >= 65 && code <= 90) || (code >= 97 && code <= 122)){
            if(vowels.has(x)) hasVowels = true;
            else hasConsonant = true;
        } else if(code < 48 || code > 57) return false;
    }
    return hasVowels && hasConsonant;
};