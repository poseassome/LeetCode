/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
    let first = "", second = "", target = ""; 
        
    for(let i=0; i<firstWord.length; i++){
        first += firstWord.charCodeAt(i)-97;
    }
    for(let i=0; i<secondWord.length; i++){
        second += secondWord.charCodeAt(i)-97;
    }
    for(let i=0; i<targetWord.length; i++){
        target += targetWord.charCodeAt(i)-97;
    }
    return parseInt(first) + parseInt(second) === parseInt(target);
};