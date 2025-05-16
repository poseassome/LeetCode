/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let maxVowel = 0, maxConsonant = 0;
    let vowel = new Map([['a', 0], ['e', 0], ['i', 0], ['o', 0], ['u', 0]]);
    let consonant = new Map();
    for(const x of s){
        if(vowel.has(x)){
            vowel.set(x, vowel.get(x) + 1);
            maxVowel = Math.max(maxVowel, vowel.get(x));
        }else{
            consonant.set(x, (consonant.get(x) || 0)+1);
            maxConsonant = Math.max(maxConsonant, consonant.get(x));
        }
    }
    return maxVowel+maxConsonant;
};