/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let cnt = 0;
    const boolean = (word) => {
        let string = chars;
        for(let x of word){
            if(string.includes(x)) string = string.replace(x, '');
            else return false;
        }
        return true;
    }
    for(const word of words){
        boolean(word) ? cnt += word.length : null;
    }
    return cnt;
};