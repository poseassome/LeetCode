/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
    const str = string => {
        let sH = {}, num = 0, arr = [];
        for(let i=0; i<pattern.length; i++){
            const letter = string[i];
            if(!sH[letter]){
                sH[letter] = ++num;
                arr.push(num);
            } else arr.push(sH[letter]);
        }
        return arr.join(',');
    }
    
    const sample = str(pattern);
    let result = [];
    for(const x of words){
        if(x.length === pattern.length && str(x) === sample) result.push(x);
    }
    return result;
};