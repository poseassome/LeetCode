/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let answer = 0;
    for(let word of words){
        let allow = true;
        for(let x of word){
            if(!allowed.includes(x)){
                allow = false;
                break;
            }
        }
        if(allow) answer++;
    }
    return answer;
};