/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    for(let i=0; i<words.length-1; i++){
        const now = words[i].split('').sort().join('');
        const next = words[i+1].split('').sort().join('');
        if(now === next){
            words.splice(i+1, 1);
            i--;
        }
    }
    return words;
};