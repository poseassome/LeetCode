/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    text = text.split(' ');
    let cnt = 0;
    for(const x of text){
        let tmp = 0;
        for(const key of brokenLetters){
            if(x.includes(key)) tmp++;
        }
        if(tmp === 0) cnt++;
    }
    return cnt;
};