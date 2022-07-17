/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    const letter = s.split(``).filter(v => /[a-zA-Z]/.test(v));
    const answer = [];
    for(let i=0; i<s.length; i++){
        if (/[a-zA-Z]/.test(s[i])) answer.push(letter.pop());
        else answer.push(s[i]);
    }
    return answer.join('');
};