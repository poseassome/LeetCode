/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function(words) {
    let count = 0;
    for(let i=0; i< words.length; i++){
        for(let j=0; j<words.length; j++){
            let a = [...new Set(words[i])].sort((a,b) => (a>b ? 1: -1)).join('');
            let b = [...new Set(words[j])].sort((a,b) => (a>b ? 1: -1)).join('');
            if(i !== j && a === b) count++;
        }
    }
    return count/2;
};