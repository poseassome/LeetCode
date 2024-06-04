/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    const notShare = (word1, word2) => {
        for(const x of word1){
            if(word2.includes(x)) return false;
        }
        return true;
    }
    let num = max = 0;
    for(let i=0; i<words.length; i++){
        for(let j=i+1; j<words.length; j++){
            if(notShare(words[i], words[j])){
                num = words[i].length*words[j].length;
                max = Math.max(num, max);
            }
        }
    }
    return max;
};