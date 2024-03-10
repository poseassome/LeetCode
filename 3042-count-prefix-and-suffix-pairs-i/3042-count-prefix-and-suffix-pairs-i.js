/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function(words) {
    let cnt = 0;
    for(let i=0; i<words.length; i++){
        for(let j=i+1; j<words.length; j++){
            const one = words[i];
            const two = words[j];
            if(two.startsWith(one) && two.endsWith(one)) cnt++;
        }
    }
    return cnt;
};