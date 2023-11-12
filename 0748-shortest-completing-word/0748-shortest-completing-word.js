/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    let res = {'found': false, 'word': ''};
    const licensePlateChars = licensePlate.toUpperCase().replace(/[^A-Z]/g, '').split('');
    
    words.forEach(word => {
        if(!res.found || word.length < res.word.length){
            let replaceWord = word.toUpperCase();
            licensePlateChars.forEach(char => {
                replaceWord = replaceWord.replace(char, '');
            });
            if(word.length - licensePlateChars.length === replaceWord.length){
                res.found = true;
                res.word = word;
            }
        }
    })
    return res.word;
};