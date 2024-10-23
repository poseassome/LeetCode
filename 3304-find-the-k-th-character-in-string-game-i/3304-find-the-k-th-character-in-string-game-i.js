/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function(k) {
    let word = 'a';
    while(word.length < k){
        let str = '';
        let string = word.split('');
        string.forEach((el, idx) => {
            str += (el === 'z') ? 'a' : String.fromCharCode(el.charCodeAt(0)+1);
        })
        word += str;
    }
    return word[k-1];
};