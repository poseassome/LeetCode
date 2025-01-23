/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function(s, dictionary) {
    dictionary.sort();
    let str = "";
    const patternMatch = (word, pattern) => {
        let i = 0, j = 0;
        while(i<word.length && j<pattern.length){
            if(word[i] === pattern[j]){
                i++;
                j++;
            } else j++;
        }
        return i === word.length;
    }

    for(const x of dictionary){
        if(patternMatch(x, s)) str = x.length > str.length ? x : str;
    }
    return str;
};